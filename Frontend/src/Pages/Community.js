import React, { useEffect } from 'react'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import CommunityCard from '../Components/Cards'
import { useSelector, useDispatch } from "react-redux"
import { getCommunities } from "../redux/features/CommunitySlice"

function Community() {
  const { communities, loading } = useSelector((state) => ({ ...state.communities }))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommunities())
  }, [ dispatch])
  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <div className='w-[80%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500'>
        <div className=' font-mono font-semibold text-xl pl-8 -mb-1 mt-5'>All Communitys</div>
        {
         
            <CommunityCard myGroup={false} community={true} data={communities} loading={loading} />
        }
      </div>


    </div>
  )
}

export default Community