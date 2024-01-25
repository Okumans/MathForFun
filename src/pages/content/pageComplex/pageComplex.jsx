import { ComplexContent } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { findByTitle } from "../mergedContents";
import { ContentBoxCreator, makeExpand } from "../../../contentBox";

export const PageComplex = () => {
    const topic = "จำนวนเชิงซ้อน"

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
                
                <div className="my-10 md:my-16 " />
                
                <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-4xl md:text-6xl lg:text-7xl text-center tracking-[0] leading-[normal]">
                {topic}
                </p>
                
                <div className="flex w-full justify-center">
                  <div className="[text-shadow:0px_4px_4px_#00000040] w-11/12 md:w-5/6 lg:w-4/6 font-normal text-white">
                    <div className="flex flex-col items-center gap-1">
                      <p className="w-full text-3xl backdrop-blur-lg rounded-md">จำนวนที่ประกอบด้วยส่วนจริงและส่วยจินตภาพ</p>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การเขียนจำนวนเชิงซ้อน"), true).content}
                      </div>

                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การบวกลบจำนวนเชิงซ้อน"), true).content}
                      </div>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การคูณจำนวนเชิงซ้อน"), true).content}
                      </div>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การหารจำนวนเชิงซ้อน"), true).content}
                      </div>
                      <div className="w-full"> 
                        <p className="w-full text-2xl backdrop-blur-lg rounded-md">สัญลักษณ์และคำศัพท์ที่เกี่ยวข้อง</p>
                        <div className="w-full my-2 flex flex-col gap-1">
                          {makeExpand(findByTitle("การสังยุค"), true).content}
                        </div>
                        <div className="w-full my-2 flex flex-col gap-1">
                          {makeExpand(findByTitle("ขนาดของจำนวนเชิงซ้อน"), true).content}
                        </div>
                      </div>
                      <p className="w-full text-2xl backdrop-blur-lg rounded-md">การเขียนจำนวนเชิงซ้อนในรูปชิงขั้ว(polar form)</p>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การเขียนจำนวนเชิงซ้อนในรูปเชิงขั้ว"), true).content}
                      </div>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("การคำนวณจำนวนเชิงซ้อนในรูปเชิงขั้ว"), true).content}
                      </div>
                      <div className="w-full my-0.5 flex flex-col gap-1">
                        {makeExpand(findByTitle("Euler's formula"), true).content}
                      </div>
                    </div>
                  </div>
                </div>


            </div>
        </div>
      );


    



}