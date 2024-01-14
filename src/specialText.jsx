
import Latex from "react-latex"

export class SpecialText {
    constructor(content, isLatex = false, classes = "") {
        this.rawContent = content;
        this.isLatex = isLatex;
        this.classes = classes;
    }

    get content() {
        return <div className="flex gap-1 flex-wrap items-baseline">
            {this.rawContent.split(/(\$.*?\$)/).map((textElement, index) => {
                if (textElement.startsWith("$") && textElement.endsWith("$")) {
                    return <p key={index} className={this.classes + " font-sans"}>{this.isLatex ? <Latex>{textElement}</Latex> : textElement} </p>
                }
                else {
                    return <p key={index} className={this.classes}> {textElement} </p>
                }
            })
            }
        </div>
    }

    get contentNoStyle() {
        return this.isLatex ? <Latex>{this.rawContent}</Latex> : this.rawContent;
    }

    static fromString(str, isLatex = false, style = "") {
        return new SpecialText(str, isLatex, style);
    }

    static toSpecialTextIfNotUndefined = (text) => {
        switch (typeof text) {
            case 'string':
                return SpecialText.fromString(text);
            case 'object':
                if (text instanceof SpecialText)
                    return text;
                else if (text.rawContent || text.isLatex || text.classes)
                    return new SpecialText(text.rawContent || "", text.isLatex || false, text.classes || "")
            default:
                return text;
        }
    }

    static recursiveNestToSpecialText = (arr) => {
        arr .forEach((element, index, array) => {
            if (Array.isArray(element)) {
                SpecialText.recursiveNestToSpecialText(element);
            } else {
                array[index] = SpecialText.toSpecialTextIfNotUndefined(element);
            }
        });
    }

}
