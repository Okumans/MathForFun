import { setContents } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { ContentBoxCreator } from "../../../contentBox";
import { SpecialText } from "../../../specialText";
import { makeExpand } from "../../../contentBox";
import { findByTitle } from "../mergedContents";

export const PageSet = () => {
  const topic = "เซต";

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
      <div className="flex flex-col w-full bg-[url('/bg.jpg')] bg-fixed bg-cover justify-center gap-5">

        <div className="my-10 md:my-16" />

        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
          {topic}
        </p>

        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] w-11/12 md:w-5/6 lg:w-4/6 font-normal text-white">
            <div className="flex flex-col items-center gap-3">
              <div>
                <p className="w-full text-3xl font-semibold mt-4">ความหมาย </p>
                <p>เซต คือ กลุ่มของสิ่งต่าง ๆ ที่สนใจ โดยเมื่อกล่าวถึงกลุ่มใดจะสามารถบอกได้แน่นอน ว่าสิ่งใดอยู่กลุ่ม สิ่งใดไม่อยู่ในกลุ่ม มักใช้อักษรภาษาอังกฤษตัวใหญ่ในการกล่าวถึงเซต เช่น กลุ่มของประเทศในเอเชีย</p>
              </div>
              <div className="w-full bg-white bg-opacity-10">
                {
                  new ContentBoxCreator(
                    ["เซต"],
                    new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                    undefined,
                    new SpecialText("เช่น เซตของประเทศในเอเชียตะวันออกเฉียงใต้", true)
                  ).content
                }
              </div>
              <div className="my-1 w-full">
                {
                  makeExpand(new ContentBoxCreator(
                    ["เซต"],
                    "สมาชิก",
                    new SpecialText("สมาชิก คือ สิ่งที่อยู่ในเซต โดยใช้สัญลักษณ์ $\\in$ แทนการเป็นสมาชิกของเซต", true),
                    new SpecialText("$n \\in N$", true),
                    undefined,
                    [[new SpecialText("$N$", true), "เซตใดๆ"],
                    [new SpecialText("$n$", true), new SpecialText("สมาชิกของเซต $N$", true)],]
                  ), true).content
                }
              </div>

              <div>
                <p className="w-full text-3xl font-semibold mt-4">เขียนเซตรูปแบบต่าง ๆ</p>
                <p>เซต คือ กลุ่มของสิ่งต่าง ๆ ที่สนใจ โดยเมื่อกล่าวถึงกลุ่มใดจะสามารถบอกได้แน่นอน ว่าสิ่งใดอยู่กลุ่ม สิ่งใดไม่อยู่ในกลุ่ม มักใช้อักษรภาษาอังกฤษตัวใหญ่ในการกล่าวถึงเซต เช่น กลุ่มของประเทศในเอเชีย</p>
              </div>
              <div className="w-full flex gap-3 flex-col">
                {
                  makeExpand(new ContentBoxCreator(
                    ["เซต"],
                    new SpecialText("แบบแจกแจงสมาชิก", false, "text-3xl"),
                    new SpecialText("เใช้ตัวแปรแทนสมาชิกแล้วบรรยายสมบัติหรือเงื่อนไข เช่น $\\{ x \\in X \\mid \\text{condition on } x \\}$", true),
                  ), true).content
                }
                {
                  makeExpand(new ContentBoxCreator(
                    ["เซต"],
                    new SpecialText("แบบบอกเงื่อนไขของสมาชิก", false, "text-3xl"),
                    new SpecialText("เขียนสมาชิกทุกตัวของเซต โดยใช้ $\\{\\}$ ครอบสมาชิกของเซตทั้งหมด และใช้$,$ เพื่อแยกสมาชิกแต่ละตัว", true),
                  ), true).content
                }
              </div>

              <div className="w-full">
                <p className="w-full text-3xl font-semibold mt-4">ประเภทของเซต</p>
                <p>เซตจะถูกแบ่งเป็น 2 ชนิด คือ เซตจำกัดและเซตอนันต์ โดยจะมีความแตกต่างกันตามวิธีการแยกแยะดังนี้</p>
              </div>
              <div className="w-full flex gap-3 flex-col">
                {makeExpand(findByTitle("เซตจำกัด"), true).content}
                {makeExpand(findByTitle("เซตอนันต์"), true).content}
              </div>

              <div className="w-full mt-4">{makeExpand(findByTitle("เซตว่าง"), true).content}</div>
              <div className="w-full mt-4">{makeExpand(findByTitle("เอกภพสัมพัทธ์"), true).content}</div>

              <div className="w-full">
                <p className="w-full text-3xl font-semibold mt-4">เพาเวอร์เซต</p>
                {new SpecialText("เรียกเซตของสับเซตทั้งหมดของ $A$ ว่า เพาเวอร์เซต (Power Set) ของ $A$ เรียกแทนว่า $P(A)$", true).content}
              </div>
              <div className="w-full flex gap-3 flex-col">
                {makeExpand(findByTitle("สับเซตและเพาว์เซต"), true).content}
                {makeExpand(findByTitle("จำนวนสับเซตของ A หรือ จำนวนสมาชิกของ P(A)"), true).content}
              </div>


              <p className="w-full text-3xl font-semibold mt-4">การดำเนินการของเซต</p>
              <div className="w-full flex gap-3 flex-col">
                {makeExpand(findByTitle("อินเตอร์เซกซัน"), true).content}
                {makeExpand(findByTitle("ยูเนียน"), true).content}
                {makeExpand(findByTitle("คอมพลีเมนต์"), true).content}
                {makeExpand(findByTitle("ผลต่าง"), true).content}
                {makeExpand(findByTitle("สูตรการดำเนินการของเซต"), true).content}
                {makeExpand(findByTitle("สูตรเซต 2 วง"), true).content}
                {makeExpand(findByTitle("สูตรเซต 3 วง"), true).content}
              </div>
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
                {setContents.map((creator) => (
                  <motion.div key={creator.title} layout variants={boxAnimation}>
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