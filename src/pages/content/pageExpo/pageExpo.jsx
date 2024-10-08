import { ExpoContent } from "./contents";
import { AnimatePresence, motion } from "framer-motion";
import { findByTitle } from "../mergedContents";
import { ContentBoxCreator, makeExpand } from "../../../contentBox";
import { SpecialText } from "../../../specialText";

export const PageExpo = () => {
    const topic = "Expo & Log"
  
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
                {/* <p className="w-full text-lg backdrop-blur-lg rounded-md">ตรรกศาสตร์คือเรื่องเกี่ยวกับการใช้เหตุผล, การพิสูจน์เรื่องต่าง ๆ โดยอาศัยหลักทางคณิตศาสตร์เข้ามาช่วย</p> */}
                
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("สมบัติเลขยกกำลังของExpo"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้สมการ Expo"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ Expo 1"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ Expo 2"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ Expo 3"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ Expo 4"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("สมบัติเลขยกกำลังของLog"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้สมการ log 1"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้สมการ log 2"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ log 1"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ log 2"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ log 3"), true).content}
                </div>
  
                <div className="w-full my-2 flex flex-col gap-1">
                  {makeExpand(findByTitle("การแก้อสมการ log 4"), true).content}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }