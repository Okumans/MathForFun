import Latex from "react-latex"
import AnimateHeight from 'react-animate-height';
import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

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
        return <p className={this.classes}>{this.isLatex ? <Latex>{this.rawContent}</Latex> : this.rawContent} </p>
    }

    get contentNoStyle() {
        return this.isLatex ? <Latex>{this.rawContent}</Latex> : this.rawContent;
    }

    static fromString(str, isLatex = false, style = "") {
        return new SpecialText(str, isLatex, style);
    }
}

const toSpecialTextIfNotUndefined = (text) => {
    switch (typeof text) {
        case 'string':
            return SpecialText.fromString(text);
        case SpecialText:
            return text;
        default:
            return text;
    }
}

const recursiveNestToSpecialText = (arr) => {
    arr.forEach((element, index, array) => {
        if (Array.isArray(element)) {
            recursiveNestToSpecialText(element);
        } else {
            array[index] = toSpecialTextIfNotUndefined(element);
        }
    });
}

export const ContentBox = ({ topics, title, description, equation, table, definition, image, video }) => {
    const [height, setHeight] = useState(0);
    const [contentLock, setContentLock] = useState(false);

    // change normal string to SpecialText if need **all text use below is all SpecialText for latex support 
    if (topics) recursiveNestToSpecialText(topics);
    if (table) recursiveNestToSpecialText(table);
    if (definition) recursiveNestToSpecialText(definition)
    title = toSpecialTextIfNotUndefined(title);
    description = toSpecialTextIfNotUndefined(description);
    equation = toSpecialTextIfNotUndefined(equation)

    return <div className="flex w-full h-fit justify-center bg-white bg-opacity-30 rounded-lg shadow-md backdrop-blur-sm ">
        <div className="flex flex-col p-3 w-full gap-2">

            {/* lock button */}
            <button
                className={"absolute w-fit top-2 right-2 bg-white rounded-full transition-all " + (contentLock ? "p-4 bg-opacity-50 -translate-y-0.5 translate-x-0.5" : "p-3 bg-opacity-20")}
                onClick={() => setContentLock(!contentLock)}>
                {contentLock ?
                    <FaUnlock width="10" height="10" fill="white" /> :
                    <FaLock width="10" height="10" fill="white" />
                }
            </button>

            <button
                className="w-full"
                aria-expanded={height !== 0}
                aria-controls="panel"
                onClick={() => {
                    if (!contentLock) setHeight(height === 0 ? 'auto' : 0)
                }}
            >
                <AnimateHeight
                    id="panel"
                    duration={500}
                    height={height}>

                    {/* topics */}
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            {topics.map((topic) =>
                                <p className="w-fit p-1 px-2 text-white text-base md:text-lg font-semibold bg-white bg-opacity-30 rounded-lg shadow-md">{topic.contentNoStyle}</p>
                            )}
                        </div>
                    </div>

                </AnimateHeight>

                {/* title */}
                <p className="w-full pt-2 text-white text-2xl md:text-4xl font-extrabold text-left">{title.contentNoStyle}</p>

                <AnimateHeight
                    id="panel"
                    duration={500}
                    height={height}
                >
                    {/* image or video */}
                    <div className="flex flex-col gap-2">
                        <p className="pb-2 w-full text-left text-white text-base md:text-lg font-medium pl-1">{description.contentNoStyle}</p>

                        {
                            image ?
                                <div className={`flex w-full justify-center rounded-md bg-no-repeat bg-cover bg-center bg-[url('https://cdn.britannica.com/11/69611-004-34D59B4A/trigonometry-formulas.jpg')]`}>
                                    <div className="w-full h-full flex justify-center rounded-md backdrop-blur-xl">
                                        <img src={image} className="md:my-2 drop-shadow-md w-full md:w-1/2 lg:w-5/12"></img>
                                    </div>
                                </div>
                                : video ?
                                    <div className={`flex w-full justify-center rounded-md bg-no-repeat bg-cover bg-center bg-black`}>
                                        <div className="w-full h-full flex justify-center rounded-md backdrop-blur-xl">
                                            <iframe className="md:my-2 drop-shadow-md w-full md:w-1/2 lg:w-5/12" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                                        </div>
                                    </div>
                                    : null
                        }

                        {/* table or equation */}
                        <div className="flex gap-1 flex-col md:flex-col lg:flex-row">
                            <div className="p-4 min-w-fit text-white text-xl md:text-2xl bg-white bg-opacity-20 rounded-lg shadow-md flex-grow">
                                {equation ?
                                    <p className="w-full text-center font-sans">{equation.contentNoStyle}</p>
                                    : table ?
                                        <TableGenerator info={table} />
                                        : null}
                            </div>

                            {/* definition */}
                            <table className="gap-2 h-fit">
                                {definition.map(([key, value]) =>
                                    <tr>
                                        <td><p className="p-1 my-0.5 text-white text-base md:text-lg font-medium text-center bg-white bg-opacity-30 rounded-lg shadow-md">{key.content}</p></td>
                                        <td><p className="p-1 text-white text-base md:text-lg font-medium bg-opacity-30 text-left break-all">{value.content}</p></td>
                                    </tr>
                                )}
                            </table>
                        </div>

                    </div>
                </AnimateHeight>
            </button>
        </div>
    </div>
}

const TableGenerator = ({ info }) => {
    const [headers, contents] = info;

    return <table className="border-2 border-white border-solid w-full ">
        <thead>
            <tr>
                {headers.map((header) => <th className="border-2 bg-white bg-opacity-20 border-white border-solid p-2">{header.content}</th>)}
            </tr>
        </thead>

        <tbody>
            {contents.map((row) =>
                <tr className="border-2 border-white border-solid">{row.map((col) =>
                    <td className="border-2 text-xl border-white border-solid p-2 px-3">
                        {col.content}
                    </td>)}
                </tr>)}
        </tbody>
    </table>
}