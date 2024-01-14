import { realNumberContent } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { findByTitle } from "../mergedContents";

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
            {/* <div className=" prose pt-10 pb-20 text-white bg-black bg-opacity-40 backdrop-blur-lg p-3 px-5 rounded-lg">
              <h1 className="text-2xl font-bold">จำนวนจริง (Real Numbers)</h1>
              <p className="mt-4">จำนวนจริงคือ จำนวนที่มีลักษณะเป็นปริมาณที่สามารถแสดงให้เห็นเป็นภาพโดยใช้จุดบนเส้นจำนวนได้</p>
              <p className="mt-2">จำนวนจริงประกอบด้วย จำนวนตรรกยะและจำนวนอตรรกยะ</p>

              <h2 className="mt-8 text-lg font-semibold">จำนวนตรรกยะ (Rational Numbers)</h2>
              <p className="mt-2">จำนวนตรรกยะคือ จำนวนที่สามารถเขียนให้อยู่ในรูปเศษส่วนของจำนวนเต็มหรือทศนิยมซ้ำได้</p>
              <ul className="mt-4 list-disc pl-4">
                <li>จำนวนตรรกยะที่ไม่ใช่จำนวนเต็ม เช่น 3.5, -4.5, 4.38</li>
                <li>จำนวนเต็ม แบ่งได้ 3 ชนิด คือ จำนวนเต็มบวก (1, 2, 3, ...), จำนวนเต็มศูนย์ (0) และจำนวนเต็มลบ (-1, -2, -3, ...)</li>
              </ul>

              <h2 className="mt-8 text-lg font-semibold">จำนวนอตรรกยะ (Irrational Numbers)</h2>
              <p className="mt-2">จำนวนอตรรกยะคือ จำนวนที่ไม่สามารถเขียนให้อยู่ในรูปเศษส่วนของจำนวนเต็มหรือทศนิยมซ้ำได้ เช่น √2, π, e</p>

              <h2 className="mt-8 text-lg font-semibold">สมบัติของจำนวนจริง</h2>
              <ul className="mt-4 list-disc pl-4">
                <li>สมบัติการบวก: ผลบวกของจำนวนจริงสองจำนวนเป็นจำนวนจริง</li>
                <li>สมบัติการลบ: ผลลบของจำนวนจริงหนึ่งจำนวนเป็นจำนวนจริง</li>
                <li>สมบัติการคูณ: ผลคูณของจำนวนจริงสองจำนวนเป็นจำนวนจริง</li>
                <li>สมบัติการหาร: ผลหารของจำนวนจริงสองจำนวนเป็นจำนวนจริง (ยกเว้นเมื่อตัวหารเป็นจำนวนศูนย์)</li>
                <li>สมบัติการสลับที่: ผลบวกหรือการคูณของจำนวนจริงสองจำนวนไม่เปลี่ยนแปลงเมื่อเปลี่ยนลำดับ</li>
                <div className="w-fit text-lg">{findByTitle("สมบัติการสลับที่").content}</div>
                <li>สมบัติการเปลี่ยนหมู่: ผลบวกหรือการคูณของจำนวนจริงสามจำนวนไม่เปลี่ยนแปลงเมื่อสลับที่ตัวคูณ</li>
                <li>สมบัติการแจกแจง: ผลบวกหรือผลคูณของจำนวนจริงกับจำนวนจริงสองจำนวน เท่ากับผลบวกหรือผลคูณของจำนวนจริงนั้นกับผลคูณของจำนวนจริงอีกสองจำนวน</li>
              </ul>

              <h2 className="mt-8 text-lg font-semibold">ความสำคัญของจำนวนจริง</h2>
              <p className="mt-2">จำนวนจริงมีความสำคัญต่อคณิตศาสตร์เป็นอย่างมาก เนื่องจากเป็นพื้นฐานของการศึกษาคณิตศาสตร์ขั้นสูง เช่น การวิเคราะห์เชิงจริง (real analysis) และพีชคณิตเชิงวิเคราะห์ (analytic geometry) นอกจากนี้ จำนวนจริงยังมีความสำคัญต่อวิทยาศาสตร์และวิศวกรรมศาสตร์อีกด้วย</p>
            </div> */}
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