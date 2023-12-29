import { useParams } from "react-router-dom";
import { useRef } from "react";
import { Searcher } from "../searcher";
import { mergedContent } from "./content/mergedContents";
import { AnimatePresence, motion } from "framer-motion";

export const TagPage = () => {
    const { tag } = useParams();
    const tagTable = useRef(new Searcher(mergedContent).getTagTable()).current;
    const tagContents = tagTable[tag] || [];

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

    return (
        <div className="flex flex-row justify-center min-h-screen overflow-clip">
            <div className="flex flex-col w-full bg-[url('../src/assets/bg.jpg')] bg-fixed bg-no-repeat bg-cover gap-3 ">
                <div className="my-10 md:my-16" />
                <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
                    {tag}
                </p>

                {/* <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] sm:w-4/6 md:w-1/2 w-4/6 font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            description
          </div>
        </div> */}

                <div className="w-full flex justify-center mb-1 mt-2">
                    <hr className="w-4/6 border-y-2 opacity-60"></hr>
                </div>

                <div className="flex w-full justify-center">
                    <div className="flex flex-col w-11/12 md:w-5/6 lg:w-4/6 gap-2">
                        <AnimatePresence layout mode={"popLayout"}>
                            {tagContents.length == 0 ?
                                <motion.div key="None" layout variants={boxAnimation} initial="hidden" animate="show" exit="exit">
                                    <div className="w-full flex justify-center">
                                        <p className="p-3 text-center text-white font-semibold bg-white bg-opacity-20 backdrop-blur-sm w-fit rounded-md">ไม่มีผลการค้นหา 🤔</p>
                                    </div>
                                </motion.div>
                                :
                                <motion.div
                                    className="w-full flex flex-col gap-2"
                                    variants={containerAnimationBoxs}
                                    animate="show"
                                    initial="hidden"
                                    exit="exit">
                                    {tagContents.map((creator) => (
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
}