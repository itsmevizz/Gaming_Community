import React, { useEffect, useState } from 'react'
import {SiGooglemessages} from "react-icons/si"
import { Navigate, useNavigate } from 'react-router-dom'
function HomeNavBar() {
    const Navigation = useNavigate()
    const  [dropdown, setDropDown] = useState(false)
    const user = localStorage.getItem("usedData")
    const data = JSON.parse(user)
    useEffect(()=>{
        if(!user){
            Navigation('/login')
          }
    })
    return (
        <div>
            <div>
                <div className='flex h-10 w-[100%] select-none' > 
                    <div className='flex'>
                    <div className='lg:ml-8 mt-10 text-3xl font-poppins font-bold mr-[50px] invisible lg:visible ml-[-250px]'>TEAMHOST</div>
                    </div>
                    <div className='flex justify-between w-full h-16 pt-2  shadow lg:shadow-xl'>
                    <div><input className='max-w-[400px] w-full h-11 ml-2 lg:ml-14 lg:w-[400px] pl-5 rounded-md bg-gray-200' type="search" placeholder='Search' /> </div>
                        <ul className='flex mr-3 lg:mr-9 content-center'>
                            <div className='flex cursor-pointer'>
                            <SiGooglemessages className='text-center m-2 mt-4 mr-5 text-2xl'/>
                            <div className='w-5 h-5 bg-red-500 rounded-full absolute mt-6 ml-5 text-center text-white text-sm font-poppins'> 50 </div>
                            </div>
                            <button className='text-center block' onClick={()=>dropdown?setDropDown(false):setDropDown(true)}>
                                <img className='w-9 rounded-full ' src="/Image/img_avatar.png" alt="Profile" />
                            </button>
                            <p className='grid place-content-center ml-2'>{data?data.name:""}</p>
                            <div className={dropdown? 'absolute mt-[60px] mx-[-30px] text-center':"hidden"}>
                                <button>
                                <ul className='w-[100px] h-auto bg-slate-50 font-poppins shadow-xl rounded-lg rounded-t-md'>
                                    <li className='pt-2 pb-3 hover:bg-orange-100 hover:rounded-sm'>Profile</li>
                                    <hr className='rounded-md' />
                                    <li className='pt-2 pb-3 hover:bg-orange-100 hover:rounded-sm' onClick={()=>{
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
            </div>
            {/* <sidebar>
                <div className='flex w-[100px] lg:w-[250px] h-screen lg:h-screen my-5 lg:my-[50px]  shadow-2xl absolute'>
                        <ul className='text-black text-xl'>
                            <li className='mt-10 ml-10  lg:mt-10 lg:mb-10 lg:ml-10  lg:flex font-sans w-[200px]  text-sm  text-orange-500 invisible lg:visible'><AiOutlineHome className='text-2xl mr-2 mt-[-3px] !visible md:lg:visible'/>Home</li>
                            <li className='ml-7 lg:ml-10 text-xl font-mono'>Main</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:b-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><FaNetworkWired className='text-2xl mr-2 mt-[-5px] visible md:lg:visible'/>   Community</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><HiOutlineUserGroup className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> Members</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><GiNewspaper className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> News</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><MdOutlineLiveTv className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> Streams</li>
                            <li className='ml-2 lg:ml-10  text-lg font-mono lg-pl-4 lg:text-xl'>Accounts</li>
                            <li className='mt-10 ml-10  lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><GrGroup className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> My Group</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'> <BsChatLeft className='text-2xl mr-2 mt-[-2px] !visible md:lg:visible'/> Chat</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><TiGroupOutline className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> Friends</li>
                            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><CgProfile className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible'/> Profile</li>
                        </ul>
                </div>
            </sidebar> */}
        </div>
    )
}

export default HomeNavBar