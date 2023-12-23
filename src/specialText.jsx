
import Latex from "react-latex"

//TODO: make tag usable

// required:
//     - topics: [string / SpecialText]
//     - title: [string / SpecialText]

// optional:
//     - description: string / SpecialText
//     - equation: SpecialText / table: [[SpecialText, ...], [[SpecialText, ...], ...]]
//     - definition: [[SpecialText, SpecialText], ...]
//     - image: string-url / video: string-url (must be https://www.youtube.com/embed/)

export class SpecialText {
    constructor(content, isLatex = false, classes = "") {
        this.rawContent = content;
        this.isLatex = isLatex;
        this.classes = classes;
    }

    get content() {
        return <div className="flex gap-1 flex-wrap">
            {this.rawContent.split(/(\$.*?\$)/).map((textElement) => {
                if (textElement.startsWith("$") && textElement.endsWith("$")) {
                    return <p className={this.classes + " font-sans"}>{this.isLatex ? <Latex>{textElement}</Latex> : textElement} </p>
                }
                else {
                    return <p className={this.classes}> {textElement} </p>
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
            case SpecialText:
                return text;
            default:
                return text;
        }
    }

    static recursiveNestToSpecialText = (arr) => {
        arr.forEach((element, index, array) => {
            if (Array.isArray(element)) {
                SpecialText.recursiveNestToSpecialText(element);
            } else {
                array[index] = SpecialText.toSpecialTextIfNotUndefined(element);
            }
        });
    }

}
