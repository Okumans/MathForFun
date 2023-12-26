import React from "react";
import { useState, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { Searcher } from "./searcher";
import { mergedContent } from "./content/mergedContents";
import { removeDuplicateFilter } from "./utility";
import { AnimatePresence, motion } from "framer-motion";

const Box = ({ message }) => {
  return <>
    <div className="min-w-fit bg-gray-300 bg-opacity-40 shadow-md rounded-full hover:bg-opacity-60 transition-all backdrop-blur-sm">
      <div className="w-full p-1 font-medium text-white text-lg text-center">
        {message}
      </div>
    </div>
  </>
}

export const HomePage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searcher = useRef(new Searcher(mergedContent)).current;
  const topics = [
    "เซต",
    "ตรรกศาสตร์",
    "จำนวนจริง",
    "ฟังก์ชั่น",
    "ภาคตัดกรวย",
    "เรขาคณิต",
    "expo&log",
    "เมทริกซ์",
    "ตรีโกณมิติ",
    "เวกเตอร์",
    "จำนวนเชิงซ้อน",
    "ลำดับและอนุกรม",
    "ความน่าจะเป็น",
    "แคลคูลัส",
    "สถิติ",
    "พีชคณิต"
  ];

  const handleSearchEvent = (event) => {
    const searchTerm = event.target.value;
    setSearchText(searchTerm);
    const results = searcher.search(searchTerm);
    setSearchResult(removeDuplicateFilter(results, (value) =>
      value.parent.title).map((value) =>
        value.parent))
  };

  const containerAnimationItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  }

  const containerAnimationBoxs = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
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




  return (
    <div className="flex flex-row justify-center min-h-screen" >
      <div className="flex flex-col w-full bg-[url('src/assets/bg.jpg')] bg-fixed bg-no-repeat bg-cover gap-5">

        <div className="my-10 md:my-16"/>
        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
          สูตรคณิตคิดไม่ออก
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

        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] w-10/12 md:w-1/2 lg:h-4/6  font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            เว็บไซต์นี้รวบรวมสูตรคณิตศาสตร์ไว้เพื่อให้ผู้ที่ต้องการเรียนรู้ทบทวนหรือค้นหาสูตรในหัวข้อต่างๆในรายวิชาคณิตศาสตร์ตามหลักสูตร
            สสวท.
          </div>
        </div>

        <div className="w-full flex justify-center mb-1 mt-2">
          <hr className="w-4/6 border-y-2 opacity-60"></hr>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col w-11/12 md:w-5/6 lg:w-4/6 gap-2">
            <AnimatePresence layout mode={"popLayout"}>
              {searchText.length == 0
                ?
                <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
                  variants={containerAnimationItems}
                  animate="show"
                  initial="hidden"
                  exit="exit">
                  {topics.map((topic) =>
                    <motion.div key={topic} layout variants={itemAnimation}>
                      <Box message={topic} />
                    </motion.div>
                  )}
                </motion.div>
                :
                <div className="w-full flex justify-center">
                  {searchResult.length == 0 ?
                    <motion.div
                      className="w-full flex justify-center"
                      key="None"
                      layout
                      variants={boxAnimation}
                      animate="show"
                      initial="hidden"
                      exit="exit">
                      <p className="p-3 text-center text-white font-semibold bg-white bg-opacity-20 backdrop-blur-sm w-fit rounded-md">ไม่มีผลการค้นหา 🤔</p>
                    </motion.div>
                    :
                    <motion.div
                      className="w-full flex flex-col gap-2"
                      variants={containerAnimationBoxs}
                      animate="show"
                      initial="hidden"
                      exit="exit">
                      {searchResult.map((creator) => (
                        <motion.div key={creator.title} layout variants={boxAnimation}>
                          {creator.content}
                        </motion.div>
                      ))}
                    </motion.div>
                  }
                </div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div >
    </div >
  );
};
