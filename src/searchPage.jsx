import React, { useState, useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { Searcher } from "./contents/searcher";
import { sampleContents } from "./contents/contents";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { removeDuplicateFilter } from "./utility";


export const SearchPage = () => {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState("");
    const searcher = useRef(new Searcher(sampleContents)).current;

    const handleSearchEvent = (event) => {
        const searchTerm = event.target.value;
        setSearchText(searchTerm);
        const results = searcher.search(searchTerm);
        setSearchResult(removeDuplicateFilter(results, (value) =>
            value.parent.title).map((value) =>
                value.parent))
    };

    const animation = {
        initial: { scale: 0, opacity: 0, y: 50 },
        animate: { scale: 1, opacity: 1, y: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 900, damping: 40 },
        mass: 2
    };

    return (
        <div className="flex flex-row justify-center min-h-screen">
            <div className="flex flex-col w-full bg-[url('src/assets/bg.jpg')] bg-fixed bg-no-repeat bg-cover justify-center gap-5">
                <div className="my-10 md:my-16"></div>
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
                            {searchResult.map((creator) => (
                                <motion.div key={creator.title} layout {...animation}>
                                    {creator.content}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};
