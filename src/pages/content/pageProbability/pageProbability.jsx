import { ProbabilityContent } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { findByTitle } from "../mergedContents";
import { ContentBoxCreator, makeExpand } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const PageProbability = () => {
  const topic = "ความน่าจะเป็น"

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

        <div className="my-10 md:my-15 border-4" />

        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
          {topic}
        </p>

        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] w-11/12 md:w-5/6 lg:w-4/6 font-normal text-white">
            <div className="flex flex-col items-center gap-3">
              <p className="w-full text-lg backdrop-blur-lg rounded-md">ความน่าจะเป็น คือการวัดหรือการประมาณความเป็นไปได้ว่า บางสิ่งบางอย่างจะเกิดขึ้น จะเป็นจริงมากเท่าใด ความน่าจะเป็นมีค่าตั้งแต่ 0 (โอกาส 0% หรือ จะไม่เกิดขึ้น) ไปจนถึง 1 (โอกาส 100% หรือ จะเกิดขึ้น)</p>
              
              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("หลักการบวก"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("ถ้านาดีต้องการเดินทางจากบ้าน ไปโรงพยาบาล โดยมียานพาหนะ คือ รถยนต์ 3 คัน และเฮลิคอปเตอร์ 2 ลำ นาดีสามารถเดินทางไปที่โรงพยาบาล โดยใช้พาหนะอย่างเดียว ได้ 3 + 2 = 5 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("หลักการคูณ"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("มีเสื้อ 3 ตัว กางเกง 2 ตัว และถุงเท้า 5 คู่ จะมีวิธีแต่งตัวทั้งหมด 3 x 2 x 5 = 30 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("เรียงของที่แตกต่างกันทั้งหมด"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("มีหนังสือ 4 วิชาที่แตกต่างกัน วิชาละ 1 เล่ม ต้องการนำทั้ง 4 เล่มมาเรียงกันเป็นเส้นตรง ได้ 4! = 4 x 3 x 2 x 1 = 24 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("เลือกเรียงของที่แตกต่างกันทั้งหมด"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("มีนักเรียน 5 คน ถูกเลือกออกมา 3 คน จะมีจำนวนวิธีที่เป็นไปได้ทั้งหมด $P_{n,r}$ = $\\frac{5!}{5-3}!$ = 60 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("เรียงของที่ไม่แตกต่างกันทั้งหมด"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("A A A B B เรียงเป็นเส้นตรงได้ทั้งหมด $\\frac{5!}{3! \\cdot 2!}$ = 10 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("การจัดหมู่ของสิ่งของที่แตกต่างกันทั้งหมด"), true).content}
                <div className="w-full bg-white bg-opacity-10">
                  {
                    new ContentBoxCreator(
                      [],
                      new SpecialText("ตัวอย่าง", false, "text-2xl opacity-80"),
                      undefined,
                      new SpecialText("มีนักเรียน 6 คน ต้องจัดกลุ่ม กลุ่มละ 3 คน มีวิธีจัดกลุ่มทั้งหมด $C_{6,3}$ = $\\binom{6}{3}$ = $\\frac{6!}{(6-3)!\\cdot3!}$ = 20 วิธี", true)
                    ).content
                  }
                </div>
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("ทฤษฎีบททวินาม"), true).content}
              </div>

              <div className="w-full my-2 flex flex-col gap-1">
                {makeExpand(findByTitle("ความน่าจะเป็น"), true).content}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}