import React from 'react'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import NewsCard from '../Components/NewsCard'

function News() {
  return (
    <div>
        <HomeNavBar/>
        <HomeSidePannel/>
        <NewsCard value={''}/>

    </div>
  )
}

export default News