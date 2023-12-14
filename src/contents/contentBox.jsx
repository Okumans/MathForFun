import Latex from "react-latex"
import AnimateHeight from 'react-animate-height';
import { useState } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

export const ContentBox = ({ topics, title, description, equation, definition, image }) => {
    const [height, setHeight] = useState(false);
    const [contentLock, setContentLock] = useState(false);

    return <div className="flex w-full h-fit justify-center bg-white bg-opacity-30 rounded-lg shadow-md backdrop-blur-sm ">
        <div className="flex flex-col p-3 w-full gap-2">
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

                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            {topics.map((topic) =>
                                <p className="w-fit p-1 px-2 text-white text-base md:text-lg font-semibold bg-white bg-opacity-30 rounded-lg shadow-md">{topic}</p>
                            )}
                        </div>
                    </div>

                </AnimateHeight>
                <p className="w-full pt-2 text-white text-2xl md:text-4xl font-extrabold text-left">{title}</p>

                <AnimateHeight
                    id="panel"
                    duration={500}
                    height={height}
                >
                    <div className="flex flex-col gap-2">
                        <p className="pb-2 w-full text-left text-white text-base md:text-lg font-medium pl-1">{description}</p>

                        {image ?
                            <div className={`flex w-full justify-center rounded-md bg-no-repeat bg-cover bg-center bg-[url('https://cdn.britannica.com/11/69611-004-34D59B4A/trigonometry-formulas.jpg')]`}>
                                <div className="w-full h-full flex justify-center rounded-md backdrop-blur-xl">
                                    <img src={image} className="md:my-2 drop-shadow-md w-full md:w-1/2 lg:w-1/3"></img>
                                </div>
                            </div>
                        : null}

                        <div className="flex gap-1 flex-col md:flex-col lg:flex-row">
                            <div className="p-4 min-w-fit text-white text-xl md:text-2xl bg-white bg-opacity-20 rounded-lg shadow-md flex-grow">
                                <p className="w-full text-center font-sans"><Latex>{equation}</Latex></p>
                            </div>

                            <table className="gap-2">
                                {definition.map(([key, value]) =>
                                    <tr>
                                        <td><p className="p-1 my-0.5  text-white text-base md:text-lg font-medium text-center bg-white bg-opacity-30 rounded-lg shadow-md">{key}</p></td>
                                        <td><p className="p-1 text-white text-base md:text-lg font-medium bg-opacity-30 text-left break-all">{value}</p></td>
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