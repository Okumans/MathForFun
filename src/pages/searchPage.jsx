import React, { useState, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { ExpressionSearcher } from "../searcherParser";
import { mergedContent, topics, createSearchContent } from "./content/mergedContents";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
    const [searchContentResult, setSearchContentResult] = useState([]);
    const [searchTopicResult, setSearchTopicResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const contentSearcher = useRef(new ExpressionSearcher(createSearchContent(mergedContent))).current;
    const topicSearcher = useRef(new ExpressionSearcher(topics)).current;
    const navigate = useNavigate();

    const handleSearchEvent = (event) => {
        const searchTerm = event.target.value;
        const contentResults = contentSearcher.convert(contentSearcher.searcherParser(searchTerm));
        const topicResults = topicSearcher.convert(topicSearcher.searcherParser(searchTerm));

        setSearchText(event.target.value);
        setSearchContentResult(contentResults);
        setSearchTopicResult(topicResults);
    };

    const boxAnimation = {
        hidden: { scale: 0, opacity: 0, y: 50 },
        show: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 40
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
        }
    }

    const itemAnimation = {
        hidden: { scale: 0, opacity: 0, y: 50 },
        show: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 350,
                damping: 25
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
        }
    }

    const containerAnimationBoxs = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
        }
    }

    const containerAnimationItems = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    }

    return (
        <div className="flex flex-row justify-center min-h-screen">
            <div className="flex flex-col w-full bg-[url('../src/assets/bg.jpg')] bg-fixed bg-no-repeat bg-cover gap-5 ">
                <div className="my-10 md:my-16"/>
                <div className="flex flex-col w-full items-center">
                    <div className="w-full flex flex-col justify-center">
                        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
                            ค้นหา
                        </p>

                        <div className="w-3/5 self-center">
                            <div className="bg-slate-200 bg-opacity-20 rounded-full pr-5 pl-1 group">
                                <div className="flex w-full align-middle min-w-fit gap-2 py-1">
                                    <input
                                        className="w-full bg-transparent text-white text-lg rounded-full px-3 transition-all outline-none"
                                        placeholder="ค้นหา"
                                        onChange={handleSearchEvent}
                                        value={searchText}
                                    />
                                    <button>
                                        <IoMdSearch className="h-full w-6 fill-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex justify-center mb-3 mt-3">
                            <hr className=" w-11/12 md:w-5/6 lg:w-4/6 border-y-2 opacity-60"></hr>
                        </div>
                    </div>

                    <div className="flex flex-col w-11/12 md:w-5/6 lg:w-4/6 gap-2">

                        <AnimatePresence layout mode={"popLayout"}>
                            {searchTopicResult.length == 0 ?
                                <div key="None0"/> // need to be here don't know why
                                :
                                <motion.div className="flex flex-wrap gap-x-3 gap-y-2 w-full"
                                    variants={containerAnimationItems}
                                    key="None1"
                                    animate="show"
                                    initial="hidden"
                                    exit="exit">
                                    {searchTopicResult.map((topic) =>
                                        <motion.div key={topic.title} layout variants={itemAnimation} className="flex-grow">
                                            <div className="flex-grow min-w-fit bg-gray-300 bg-opacity-40 shadow-md rounded-lg hover:bg-opacity-60 transition-all backdrop-blur-sm">
                                                <div 
                                                className="w-full py-2 px-3 font-medium text-white text-lg text-center"
                                                onClick={() => {
                                                    navigate("/tags/"+topic.title);
                                                }}>
                                                    {topic.title}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            }
                            {searchContentResult.length == 0 ?
                                <motion.div key="None2" layout variants={boxAnimation} initial="hidden" animate="show" exit="exit">
                                    <div className="w-full flex justify-center">
                                        <p className="p-3 text-center text-white font-semibold bg-white bg-opacity-20 backdrop-blur-sm w-fit rounded-md">ไม่มีผลการค้นหา 🤔</p>
                                    </div>
                                </motion.div>
                                :
                                <motion.div
                                    className="w-full flex flex-col gap-2"
                                    key="None3"
                                    variants={containerAnimationBoxs}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit">
                                    {searchContentResult.map((creator) => (
                                        <motion.div key={creator.title} layout variants={boxAnimation}>
                                            {creator.content}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};
