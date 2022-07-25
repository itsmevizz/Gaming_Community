import React from 'react'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import CommunityCard from '../Components/Cards'

function Community() {
  return (
    <div>
        <HomeNavBar/>
        <HomeSidePannel/>
        <div className='w-[80%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500'>
        <div className=' font-mono font-semibold text-xl pl-8 -mb-1 mt-5'>All Communitys</div>
        <CommunityCard/>
        </div>


    </div>
  )
}

export default Community