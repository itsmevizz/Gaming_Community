import React from 'react'
import Form from '../Components/Form'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import ProfileFotoAndBg from '../Components/ProfileFotoAndBg'

function Profile() {
  return (
    <div className=''>
      <HomeNavBar />
      <HomeSidePannel />
      <div className='ml-[22%] mt-5'>
        <ProfileFotoAndBg />
      </div>
      <Form />
    </div>
  )
}

export default Profile