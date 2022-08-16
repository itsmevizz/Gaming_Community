import React from 'react'

function ProfileFotoAndBg() {
  return (
    <div>
        <div className='w-[60%] lg:w-[70%] h-[8%] lg:h-[30%] bg-white shadow-lg absolute border bg-cover flex justify-center' style={{backgroundImage: `url( "../Image/Tree-Spectrum-Facebook-Timeline-Profile-Cover-1.jpg")`}}>
            <div className='w-[10%] mt-5 lg:mt-0 '>
            <img className="rounded-full lg:mt-20" src="../Image/img_avatar.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProfileFotoAndBg