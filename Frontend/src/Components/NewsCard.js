import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function NewsCard(props) {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const newsapi = async () => {
        try {
            const news = await axios({
                url: "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=05fd9314133f42ffbcce9e0d73a4b885"
            })
                .then((data) => {
                    setNews(data.data.articles)
                })
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        newsapi()
    },[])

    return (
        <div class={`${props.value} left-[110px] lg:left-72 w-[65%] sm:w-[70%] md:w-[75%] lg:w-[80%] lg:my-[20px] duration-500 relative select-none`}>
            {loading ?
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>

                    {news.map((content, key) => {
                        if (content.urlToImage) {
                            return (
                                <motion.div key={key} class="grid overflow-hidden shadow-md hover:shadow-2xl bg-white dark:bg-[#1a2634] rounded-lg duration-300 hover:cursor-pointer"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    <div
                                        class={`${content.urlToImage ? "min-h-[150px]" : " min-h-0"} rounded-r-full lg:rounded-full flex-none bg-cover bg-right rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`}
                                        style={{ backgroundImage: `url(${content.urlToImage})` }}
                                        alt={`${content.title}`}
                                        title=""
                                    >
                                    </div>
                                    <div class=" flex flex-col justify-between lg:rounded-r p-4 ">
                                        <div class="grid  ">
                                            <div class="text-gray-900 dark:text-gray-200 font-bold text-xl mb-2 font-mono">
                                                {`${content.title}`}
                                            </div>
                                            <p class="text-gray-700 text-base font-poppins dark:text-gray-200">
                                                {`${content.description ? content.description : ""}`}
                                            </p>
                                        </div>
                                        <div class="items-center mt-4 ">
                                            <div class="text-xs w-auto">
                                                <span class="text-gray-900 leading-none dark:text-gray-200">
                                                    {`${content.author ? content.author : ''}`}
                                                </span>
                                            </div>
                                            <p class="text-gray-600 mt-1 dark:text-gray-200 text-xs">{`${(new Date(content.publishedAt)).toLocaleDateString()}`}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        } else {
                            return (
                                null
                            )
                        }
                    })}
                </div> :

                <div className='mt-[25%] grid place-content-center'>
                    <div class=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-red-600 ml-5 mb-2">
                    </div>
                    <div className='text-xl font-poppins animate-pulse'>
                        <span>Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default NewsCard