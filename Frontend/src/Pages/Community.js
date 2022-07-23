import React from 'react'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import CommunityCard from '../Components/CommunityCard'

function Community() {
  return (
    <div>
        <HomeNavBar/>
        <HomeSidePannel/>
        <div className='w-[70%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500'>
        <CommunityCard/>
        </div>


    </div>
  )
}

export default Community