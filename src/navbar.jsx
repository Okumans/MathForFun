import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}
const Item = ({ text, link }) => {
    return <Menu.Item>
        {({ active }) => (
            <Link 
                to={"/topics/"+link}
                className={classNames(
                    active ? 'bg-gray-100 bg-opacity-20 text-white' : 'text-white',
                    'block px-4 py-2 text-base transition-all '
                )}
            >
                {text}
            </Link>
        )}
    </Menu.Item>
}

const Dropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-base md:text-lg font-semibold text-white shadow-sm  hover:bg-purple-50 hover:bg-opacity-20 transition-all">
                    เรื่อง
                    <RiArrowDropDownLine className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-8 min-w-fit w-fit md:w-56 origin-top-right rounded-md bg-black bg-opacity-40 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Item text="เซต" link="set"/>
                        <Item text="ตรรกศาสตร์" link="logic"/>
                        <Item text="จำนวนจริง" link="real-number"/>
                        {/* <Item text="ฟังก์ชั่น" link="function"/>
                        <Item text="ภาคตัดกรวย" link="conic-section"/>
                        <Item text="เรขาคณิต" link="analytic-geometry"/> */}
                        <Item text="expo&log" link="exponential-logarithm"/>
                        {/* <Item text="เมทริกซ์" link="matrix"/>
                        <Item text="ตรีโกณมิติ" link="trigonometry"/>
                        <Item text="เวกเตอร์" link="vector"/> */}
                        <Item text="จำนวนเชิงซ้อน" link="complex-number"/>
                        {/* <Item text="ลำดับและอนุกรม" link="sequence-series"/> */}
                        <Item text="ความน่าจะเป็น" link="probability"/>
                        {/* <Item text="แคลคูลัส" link="calculus"/>
                        <Item text="สถิติ" link="statistics"/> */}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export const Navbar = () => {
    return <>
        <div className="fixed min-w-full min-h-fit z-10">
            <div className="w-full h-fit [background:linear-gradient(180deg,rgb(0,0,0)_0%,rgb(43.57,12.47,68)_99.98%,rgb(28.05,0,63.75)_99.99%)]">
                <div className="flex items-center justify-between p-4 px-5">
                    <div className="w-full flex items-center divide-x-2 divide-opacity-40 divide-slate-200">
                        <a href='/'>
                            <img className="h-8 md:h-14 object-cover" alt="Logo" src="../src/assets/logo.png" />
                        </a>
                       <div className='flex'>
                         <div className="ml-5">
                             <div className='ml-5'>
                                 <Dropdown />
                             </div>
                         </div>
                         <Link to="/search" className='flex items-center gap-2 ml-5 w-fit text-base px-3 py-2 text-white font-semibold bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all'>
                            <p>ค้นหา</p>
                            <IoSearch fill='white'/>
                        </Link>
                       </div>
                    </div>
                    {/* <img className="w-[11px] h-[10px] top-[36px] left-[222px]" alt="Polygon" src="polygon-1.svg" /> */}
                    <a className="right-10 opacity-70 font-medium text-white text-base md:text-lg" href='/reference'>
                        อ้างอิง
                    </a>
                </div>
            </div>

        </div>
    </>
}