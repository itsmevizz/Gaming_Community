import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {GrGroup} from 'react-icons/gr'
import {BsChatLeft} from 'react-icons/bs'
import {TiGroupOutline} from 'react-icons/ti'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {FaNetworkWired} from "react-icons/fa"
import {GiNewspaper} from "react-icons/gi"
import {MdOutlineLiveTv} from "react-icons/md"
import {SiGooglemessages} from "react-icons/si"
import CommunityCard from './CommunityCard'

function HomeSidePannel() {
  return (
    <div className='overflow-auto select-none'>
      <div className="m-0 p-0 fixed overflow-x-hidden overflow-y-clip h-screen lg:h-auto w-[100px] lg:w-[250px] shadow-2xl">
        <div className='flex h-screen'>
          <ul className='text-black text-xl  my-5 lg:my-[50px]'>
            <li className='mt-10 ml-10  lg:mt-10 lg:mb-10 lg:ml-10  lg:flex font-sans w-[200px]  text-sm  text-orange-500 invisible lg:visible'><AiOutlineHome className='text-2xl mr-2 mt-[-3px] !visible md:lg:visible' />Home</li>
            <li className='ml-7 lg:ml-10 text-xl font-mono'>Main</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:b-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><FaNetworkWired className='text-2xl mr-2 mt-[-5px] visible md:lg:visible' />   Community</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><HiOutlineUserGroup className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> Members</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><GiNewspaper className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> News</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10  flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><MdOutlineLiveTv className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> Streams</li>
            <li className='ml-2 lg:ml-10  text-lg font-mono lg-pl-4 lg:text-xl'>Accounts</li>
            <li className='mt-10 ml-10  lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><GrGroup className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> My Group</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'> <BsChatLeft className='text-2xl mr-2 mt-[-2px] !visible md:lg:visible' /> Chat</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><TiGroupOutline className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> Friends</li>
            <li className='mt-10 ml-10 mb-10 lg:mt-10 lg:mb-10 lg:ml-10 flex font-sans w-[200px] text-sm invisible lg:visible cursor-pointer'><CgProfile className='text-2xl mr-2 mt-[-5px] !visible md:lg:visible' /> Profile</li>
          </ul>
        </div>
      </div>
        <div>
        <div className='w-4/5 left-[12%] my-72 lg:left-[16%] ml-9  absolute'>
          <CommunityCard/>
        </div>
        </div>
    </div>
  )
}

export default HomeSidePannel