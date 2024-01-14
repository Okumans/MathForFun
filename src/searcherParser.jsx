import { Searcher } from "./searcher";
import { removeDuplicateFilter, sumFilter } from "./utility";

export class ExpressionSearcher extends Searcher {
    constructor(rawContents) {
        super(rawContents);
    }

    isOperator(character) {
        return character == ',' || character == '&';
    }

    isAnyOperator(character) {
        return character == ',' || character == '&' || character == '(' || character == ')';
    }

    or(term1, term2) {
        const result1 = Array.isArray(term1) ? term1 : this.rawSearch(term1);
        const result2 = Array.isArray(term2) ? term2 : this.rawSearch(term2);
        return removeDuplicateFilter([...result1, ...result2].filter(([_, score]) => score > 0)
            .sort((a, b) => b[1] - a[1]), ([key, _]) => key)

    }

    and(term1, term2) {
        const results = new Object();
        const result1 = Array.isArray(term1) ? term1 : this.rawSearch(term1);
        const result2 = Array.isArray(term2) ? term2 : this.rawSearch(term2);

        const temp = [...result1, ...result2].filter(([_, score]) => score > 0);
        const average = sumFilter(temp, (([_, score]) => score)) / temp.length;

        result1.forEach(([key, score]) => results[key] = score ? (results[key] || 0) ? results[key] * 1.25 + score : score * .70 : results[key] = (results[key] || 0) * .70);
        result2.forEach(([key, score]) => results[key] = score ? (results[key] || 0) ? results[key] * 1.25 + score : score * .70 : results[key] = (results[key] || 0) * .70);

        return Object.entries(results).filter(([_, score]) => score > ((average > 0) ? average : 0));
    }

    searcherParser(expression) {
        const stack = new Array();
        const resultStack = new Array();
        let buffer = new String();

        Array.from(expression).forEach(character => {
            if (this.isAnyOperator(character)) {
                if (buffer.trim()) {
                    resultStack.push(buffer.trim());
                    buffer = "";
                }

                if (stack.length == 0 || stack.at(-1) == '(') {
                    stack.push(character);
                }
                else if (character == '(') {
                    stack.push(character);
                }
                else if (character == ')') {

                    while (stack.length != 0) {
                        let operator = stack.pop();
                        if (operator != '(') {
                            if (operator == ',')
                                resultStack.push(this.or(resultStack.pop(), resultStack.pop()));
                            else if (operator == '&')
                                resultStack.push(this.and(resultStack.pop(), resultStack.pop()));

                            operator = stack.pop();
                        }
                    }
                }
                else if (this.isOperator(character)) {
                    stack.push(character);
                    while (stack.length != 0) {
                        let operator = stack.pop();
                        if (this.isOperator(operator)) {
                            if (operator == ',')
                                resultStack.push(this.or(resultStack.pop(), resultStack.pop()));
                            else if (operator == '&') {
                                resultStack.push(this.and(resultStack.pop(), resultStack.pop()));
                            }

                            operator = stack.pop();
                        }
                    }
                }
            }

            else {
                buffer += character;
            }
        })

        if (buffer.trim())
            resultStack.push(buffer.trim());

        while (stack.length != 0) {
            let operator = stack.pop();
            if (operator == ',')
                resultStack.push(this.or(resultStack.pop(), resultStack.pop()));
            else if (operator == '&')
                resultStack.push(this.and(resultStack.pop(), resultStack.pop()));
        }

        if (resultStack[0] && !Array.isArray(resultStack[0])) {
            return this.rawSearch(resultStack[0]).filter(([_, score]) => score > 0);
        }
        return resultStack[0];

    }

    convert(parsed) {
        return parsed?.sort((a, b) => b[1] - a[1])
        .map(([title, _]) => ({
          title: title,
          content: this.mapContents[title].content
        })) || [];
    }
}