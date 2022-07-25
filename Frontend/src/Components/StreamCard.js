import React from 'react'

function Streams() {

    const img = [
        {
            img: `"../Image/fortnite-screen-ps4-24may17-cfbc1.webp"`,
        },
        { img: `"../Image/10927348.jpg"` },
        { img: ` "../Image/ekLR4no6adtCNHNuLV3cc3.jpg"` },
        { img: ` "../Image/ekLR4no6adtCNHNuLV3cc3.jpg"` },
        { img: ` "../Image/ekLR4no6adtCNHNuLV3cc3.jpg"` },
        { img: ` "../Image/ekLR4no6adtCNHNuLV3cc3.jpg"` },
        { img: ` "../Image/ekLR4no6adtCNHNuLV3cc3.jpg"` },
    ];

    return (
        <div className='w-[80%] mx-28 lg:mx-72'>
            <div class=" p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5">
                {img.map((item, key) => {
                    return (
                        <div key={key} class="rounded overflow-hidden shadow-lg cursor-pointer select-none">
                            <div className='absolute text-white text-sm bg-opacity-90 w-auto pl-1 pr-1 text-center grid place-content-center m-2 h-5 rounded bg-red-600'>
                                Live
                            </div>
                            <img class="w-full" src="../Image/ekLR4no6adtCNHNuLV3cc3.jpg"  alt="Mountain" />
                            <div class="px-1 py-2">
                                <div class="font-bold text-sm mb-2">Grand Theft Auto V</div>
                                <p class="text-gray-700 text-base">
                                    
                                </p>
                            </div>
                            <div class="px-1 pt-1 pb-2">
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">SKYFLEETOFFICIAL</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Streams