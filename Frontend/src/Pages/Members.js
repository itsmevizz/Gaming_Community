import React, { useEffect } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";
import CommunityCard from '../Components/Cards'
import { useDispatch, useSelector } from "react-redux"
import { getMembers } from '../redux/features/MembersSlice'

function Members() {

  const dispatch = useDispatch()
  const { members, loading } = useSelector((state) => ({ ...state.members }))
  useEffect(() => {
    dispatch(getMembers())
    console.log(members);
  }, [])
  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <div className="w-[80%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500">
        <div className=" font-mono font-semibold text-xl pl-8 -mb-1 mt-5">
          Members Directory
        </div>
        <CommunityCard members={true} data={members} loading={loading} />
      </div>
    </div>
  );
}

export default Members;
