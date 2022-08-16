import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewsArchive(props) {
  const Navigate = useNavigate()
  const [news, setNews] = useState([])
  const [activeNews, setActiveNews] = useState([])
  const [loading, setLoading] = useState(false)

  const newsapi = async () => {
    try {
      const news = await axios({
        url: "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=05fd9314133f42ffbcce9e0d73a4b885"
      })
        .then((data) => {
          const content = data.data.articles.slice(0, 4).map((active) => {
            setActiveNews(active)
          })
          setNews(data.data.articles)
        })
      setLoading(true)
    } catch (err) {

    }
  }
  useEffect(() => {
    newsapi()
  }, [])

  return (
    <div>
      <div className={`${props.values}`}>
        <div
          id="carouselExampleInterval0"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <h1 className="font-mono font-medium  text-sm lg:text-xl  uppercase mt-3 lg:mt-0 ml-3">
            News Archive
          </h1>
          <div className="carousel-inner shadow-lg hover:shadow-2xl cursor-pointer" onClick={()=>Navigate('/News')} >
            <div
              className={`carousel-item active bg-cover bg-right`}
              data-bs-interval="0"
            >
              <div class="max-w-xl w-full lg:max-w-full lg:flex ">
                <div
                  class="h-56 lg:w-72  flex-none bg-cover bg-right rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{  backgroundImage: `url(${activeNews.urlToImage})` }}
                  title="Woman holding a mug"
                ></div>
                <div class="border-r h-56 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="  overflow-auto">
                    <div class="text-gray-900 font-bold text-xl mb-2">
                      {`${activeNews.title}`}
                    </div>
                    <p class="text-gray-700 text-base">
                    </p>
                  </div>
                  <div class="flex items-center">
                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">
                        {`${activeNews.author ? activeNews.author : ''}`}
                      </p>
                      <p class="text-gray-600">{`${(new Date(activeNews.publishedAt)).toLocaleDateString()}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {news.slice(2, 10).map((item, index) => {
              if (item.urlToImage) {
                return (
                  <div
                    key={index}
                    className={`carousel-item bg-cover bg-right`}
                    data-bs-interval="3000"
                  >
                    <div class="max-w-xl w-full lg:max-w-full lg:flex  ">
                      <div
                        class="h-56 lg:w-72 flex-none bg-cover bg-right rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ backgroundImage: `url(${item.urlToImage})` }}
                        title="Woman holding a mug"
                      ></div>
                      <div class="border-r h-56 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="  overflow-auto">
                          <div class="text-gray-900 font-bold text-xl mb-2">
                            {`${item.title}`}
                          </div>
                          {/* <p class="text-gray-700 text-base">
                          {`${news.description ? news.description : ""}`}
                          </p> */}
                        </div>
                        <div class="flex items-center">
                          <div class="text-sm">
                            <p class="text-gray-900 leading-none">
                              {`${item.author ? item.author : ''}`}
                            </p>
                            <p class="text-gray-600">{`${(new Date(item.publishedAt)).toLocaleDateString()}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }else{
                return(
                  null
                )
              }
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval0"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval0"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsArchive;
