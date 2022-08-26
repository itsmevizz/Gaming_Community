import React, { useEffect, useState } from 'react'
import { SiGooglemessages } from "react-icons/si"
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
function HomeNavBar() {
    const Navigation = useNavigate()
    const [dropdown, setDropDown] = useState(false)
    const user = localStorage.getItem("usedData")
    const data = JSON.parse(user)
    return (
        <div>
            <motion.div className='' 
            initial={{ y:-200 }}
            animate = {{ y :0 }}
            >
                <div className='flex bg-white w-full  h-[50px]  dark:bg-[#1a2634] dark:text-white' >
                    <div className='flex fixed-top  bg-white pt-1  shadow lg:shadow-xl justify-between w-full lg:ml-[250px] duration-200  dark:bg-[#1a2634] dark:text-white'>
                        <div className='max-w-[400px] w-32 h-11 lg:w-[400px] pl-5 ml-5 rounded-md ' type="search" placeholder='Search' />
                        <ul className='flex mr-14 lg:mr-[300px] content-center'>
                            <div className='flex cursor-pointer'>
                                <SiGooglemessages className='text-center text-gray-400 m-2 mt-4 mr-5 text-2xl' />
                                <div className='w-5 h-5 bg-red-500 rounded-full absolute mt-6 ml-5 text-center text-white text-sm font-poppins'> 50 </div>
                                <button className='text-center block' onClick={() => dropdown ? setDropDown(false) : setDropDown(true)}>
                                    <img className='w-9 rounded-full ' src="/Image/img_avatar.png" alt="Profile" />
                                </button>
                            </div>
                            <p className='grid place-content-center ml-2'>{data ? data.name : ""}</p>
                            <div className={dropdown ? 'absolute mt-[60px] mx-[-30px] text-center ' : "hidden"}>
                                <button>
                                    <ul className='w-[100px] h-auto bg-slate-50 font-poppins shadow-xl rounded-lg rounded-t-md'>
                                        {/* <li className='pt-2 pb-3 hover:bg-orange-100 hover:rounded-sm'>Profile</li> */}
                                        <li className='pt-2 pb-3 hover:bg-orange-100 hover:rounded-sm' onClick={() => {
                                            localStorage.clear("usedData")
                                            Navigation('/login')
                                        }}>Logout</li>
                                        <li></li>
                                    </ul>
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}

export default HomeNavBar