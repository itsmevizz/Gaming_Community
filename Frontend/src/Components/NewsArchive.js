import React from "react";

function NewsArchive(props) {
  const img = [
    {
      img: `url("../Image/fortnite-screen-ps4-24may17-cfbc1.webp")`,
      active: true,
    },
    { img: `url("../Image/10927348.jpg")` },
    { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
  ];
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
          <div className="carousel-inner">
            {img.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`carousel-item bg-cover bg-right ${
                    item.active ? "active" : ""
                  } `}
                  data-bs-interval="3000"
                >
                  <div class="max-w-xl w-full lg:max-w-full lg:flex ">
                    <div
                      class="h-56 lg:w-72 flex-none bg-cover bg-right rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                      style={{ backgroundImage: `${item.img}` }}
                      title="Woman holding a mug"
                    ></div>
                    <div class="border-r h-56 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div class="  overflow-auto">
                        <div class="text-gray-900 font-bold text-xl mb-2">
                          Fortnite v21.30{" "}
                        </div>
                        <p class="text-gray-700 text-base">
                          Fortnite v21.30 Update rolling out: New Summer skins,
                          map changes, free skin, and more
                        </p>
                      </div>
                      <div class="flex items-center">
                        <div class="text-sm">
                          <p class="text-gray-900 leading-none">
                            Jonathan Reinink
                          </p>
                          <p class="text-gray-600">Aug 18</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
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
