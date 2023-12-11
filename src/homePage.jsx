import React from "react";
import { IoMdSearch } from "react-icons/io";

const Box = ({ message }) => {
  return <>
    <div className="min-w-fit bg-gray-300 bg-opacity-40 shadow-md rounded-xl">
      <div className="w-full p-1 font-medium text-white text-lg text-center">
        {message}
      </div>
    </div>
  </>
}

const SearchBar = () => {
  return <>
    <div className="bg-slate-200 bg-opacity-20 rounded-full pr-5">
      <div className="flex w-full align-middle min-w-fit gap-2 py-1">
        <input className="w-full bg-transparent text-white text-lg rounded-full px-3"/>
        <button>
          <IoMdSearch className="h-full w-6 fill-white"/>
        </button>
      </div>
    </div>
  </>
}

export const HomePage = () => {
  return (
    <div className="flex flex-row justify-center min-h-screen">
      <div className="flex flex-col w-full bg-[url('src/assets/bg.jpg')] bg-no-repeat bg-cover justify-center gap-5">
        <p className="text-white [text-shadow:0px_4px_4px_#00000040] font-bold text-7xl text-center tracking-[0] leading-[normal]">
          สูตรคณิตคิดไม่ออก
        </p>

        <div className="w-3/5 self-center">
          <SearchBar/>
        </div>
        <div className="flex w-full justify-center">
          <div className="[text-shadow:0px_4px_4px_#00000040] sm: w-4/6 md:w-1/2 lg:w-1/2 font-normal text-white text-lg text-center tracking-[0] leading-[normal]">
            เว็บไซต์นี้รวบรวมสูตรคณิตศาสตร์ไว้เพื่อให้ผู้ที่ต้องการเรียนรู้ทบทวนหรือค้นหาสูตรในหัวข้อต่างๆในรายวิชาคณิตศาสตร์ตามหลักสูตร
            สสวท.
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-4/6">
            <Box message="เซต" />
            <Box message="ตรรกศาสตร์" />
            <Box message="จำนวนจริง" />
            <Box message="ฟังก์ชั่น" />
            <Box message="ภาคตัดกรวย" />
            <Box message="เรขาคณิต" />
            <Box message="expo&log" />
            <Box message="เมทริกซ์" />
            <Box message="ตรีโกณมิติ" />
            <Box message="เวกเตอร์" />
            <Box message="จำนวนเชิงซ้อน" />
            <Box message="ลำดับและอนุกรม" />
            <Box message="ความน่าจะเป็น" />
            <Box message="แคลคูลัส" />
            <Box message="สถิติ" />
            <Box message="พีชคณิต" />
          </div>
        </div>

      </div>
    </div>
  );
};
