import React from 'react'

function NewsCard(props) {

    const img = [
        {
            img: `url("../Image/fortnite-screen-ps4-24may17-cfbc1.webp")`,
            active: true,
        },
        { img: `url("../Image/10927348.jpg")` },
        { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
        { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
        { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
        { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
        { img: `url( "../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
    ];
    return (
        <div class={`${props.value} left-32 lg:left-72 w-[65%] sm:w-[70%] md:w-[75%] lg:w-[80%] lg:my-[20px] duration-500 relative`}>
            <div className=' grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4  '>
                {img.map((content, key) => {
                    return (
                        <div key={key} class="">
                            <div
                                class="h-56 flex-none bg-cover bg-right rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{ backgroundImage: `${content.img}` }}
                                title="Woman holding a mug"
                            ></div>
                            <div class="border-r h-56 border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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
                    )
                })}
            </div>
        </div>
    )
}

export default NewsCard