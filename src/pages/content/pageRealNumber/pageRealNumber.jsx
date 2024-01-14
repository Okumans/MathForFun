import { realNumberContent } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { findByTitle } from "../mergedContents";
import { ContentBoxCreator, makeExpand } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const PageRealNumber = () => {
  const topic = "จำนวนจริง"

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
      <div className="flex flex-col w-full bg-[url('../src/assets/bg.jpg')] bg-fixed bg-cover justify-center gap-5">

        <div className="my-10 md:my-16" />

        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
          {topic}
        </p>

        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] w-11/12 md:w-5/6 lg:w-4/6 font-normal text-white">
            <div className="flex flex-col items-center gap-3">
              {/* <img className="w-4/6" src="https://www.scimath.org/images/uploads/2_18.jpg" /> */}
              <p className="w-full text-lg backdrop-blur-lg rounded-md">จำนวนจริงประกอบด้วย จำนวนอตรรกยะ และ จำนวนตรรกยะ ซึ่งเราจะพิจารณาในรายละเอียดได้ดังนี้</p>
              {/* <p className="w-full text-2xl font-semibold">จำนวนตรรกยะ</p> */}

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("จำนวนตรรกยะ"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      ["จำนวนจริง", "จำนวนตรรกยะ"],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("$\\frac{1}{2}$, $7$, $-10$, $3.14159$ เป็นต้น", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1 mb-6">
                {makeExpand(findByTitle("จำนวนอตรรกยะ"), true).content}

                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      ["จำนวนจริง", "จำนวนอตรรกยะ"],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("$e$, $\\pi$, $\\phi$, $\\tau$ $\\sqrt{2}$ เป็นต้น", true)
                    ).content
                  }
                </div>
              </div>

              <p className="w-full text-lg mb-2 backdrop-blur-lg rounded-md">
                จะเห็นว่า จำนวนตรรกยะ และจำนวนอตรรกยะ จะมีความแตกต่างกันชัดเจน มีลักษณะที่ตรงข้ามกัน นั่นแปลว่า เซตของจำนวนตรรกยะ และเซตของจำนวนอตรรกยะ จะไม่มีสมาชิกที่ซ้ำกันเลย อย่างไรก็ตาม ถ้านำเซตของจำนวนตรรกยะและเซตของจำนวนอตรรกยะมายูเนียน (รวมกัน) เราจะได้ผลลัพธ์จากการยูเนียนคือ เซตของจำนวนจริง นั่นเอง โดยจำนวนจริงสามารถแบ่งเป็นจำนวนชนิดต่างๆ ดังแผนผังต่อไปนี้
              </p>

              <div className="w-full bg-white flex justify-center">
                <img className="w-4/5" src="https://cdn1.byjus.com/wp-content/uploads/2020/01/Real-Numbers-2.png"></img>
              </div>
              
              <p className="w-full text-3xl font-semibold mt-4">สัญลักษณ์ของเซตของจำนวนจริงชนิดต่างๆ ที่ควรรู้จัก</p>
              <div className="w-full flex flex-wrap gap-2">
                <div className="text-3xl flex items-baseline bg-white bg-opacity-25 p-2 w-fit rounded-md backdrop-blur-md px-4 flex-grow">
                  {new SpecialText("$\\mathbb{N}$", true).content}
                  <p className="text-lg">แทนเซตของจำนวนเต็มบวก (จำนวนนับ)</p>
                </div>
                <div className="text-3xl flex items-baseline bg-white bg-opacity-25 p-2 w-fit rounded-md backdrop-blur-md px-4 flex-grow">
                  {new SpecialText("$\\mathbb{Z}$", true).content}
                  <p className="text-lg">แทนเซตของจำนวนเต็ม</p>
                </div>
                <div className="text-3xl flex items-baseline bg-white bg-opacity-25 p-2 w-fit rounded-md backdrop-blur-md px-4 flex-grow">
                  {new SpecialText("$\\mathbb{Q}$", true).content}
                  <p className="text-lg">แทนเซตของจำนวนตรรกยะ</p>
                </div>
                <div className="text-3xl flex items-baseline bg-white bg-opacity-25 p-2 w-fit rounded-md backdrop-blur-md px-4 flex-grow">
                  {new SpecialText("$\\mathbb{Q'}$", true).content}
                  <p className="text-lg">แทนเซตของจำนวนอตรรกยะ</p>
                </div>
                <div className="text-3xl flex items-baseline bg-white bg-opacity-25 p-2 w-fit rounded-md backdrop-blur-md px-4 flex-grow">
                  {new SpecialText("$\\mathbb{R}$", true).content}
                  <p className="text-lg"> แทนเซตของจำนวนจริง</p>
                </div>
              </div>
              
              <p className="w-full text-3xl font-semibold mt-4">สมบัติของจำนวนจริง </p>
              {makeExpand(findByTitle("สมบัติปิด"), true).content}
              {makeExpand(findByTitle("สมบัติการสลับที่"), true).content}
              {makeExpand(findByTitle("สมบัติการเปลี่ยนกลุ่ม"), true).content}
              {makeExpand(findByTitle("สมบัติการมีเอกลักษณ์"), true).content}

            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mb-1 mt-2">
          <hr className="w-4/6 border-y-2 opacity-60"></hr>
        </div>

        <div className="flex w-full justify-center">
          <div className="flex flex-col w-11/12 md:w-5/6 lg:w-4/6 gap-2">
            <AnimatePresence layout mode={"popLayout"}>
              <motion.div
                className="w-full flex flex-col gap-2"
                variants={containerAnimationBoxs}
                animate="show"
                initial="hidden"
                exit="exit">
                {realNumberContent.map((creator, index) => (
                  <motion.div key={index} layout variants={boxAnimation}>
                    {creator.content}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}