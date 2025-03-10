import Image from 'next/image'
import React, { useState } from 'react'
const videoStylesList = [
    {   name: 'Realistic',
        image: '/realistic.jpg'
    },
    {   name: 'Anime',
        image: '/anime.jpg'
    },
    {   name: 'Cartoon',
        image: '/cartoon.jpg'
    },
    {   name: 'Cinematic',
        image: '/cinematic.jpg'
    },
    {   name: 'Cyber Punk',
        image: '/cyberpunk.jpg'
    },
    {   name: 'GTA',
        image: '/gta.jpg'
    },
    {   name: 'WaterColor',
        image: '/watercolor.jpg'
    },
]

function VideoStyle({onHandleInputChange}) {
    const [selectedStyle, setSelectedStyle] = useState()

  return (
    <div>
        <h1 className='text-3xl mt-5'>Video Styles</h1>
        <p className='mb-4 text-gray-400'>Select Any Video Style</p>

        <ul className='flex gap-3 flex-wrap'>
            {videoStylesList.map((video, index) => <li key={index} className={`${selectedStyle === video.name && 'border border-white p-2' }`} onClick={ () => { setSelectedStyle(video.name) 
                                                                        onHandleInputChange('videoStyle', video.name) }}>
                <Image className='height-[70px]' key={index} src={video.image} height={300} width={200} alt={video.name} />
                <p className='text-white text-center'>{video.name}</p>
            </li>)}
        </ul>
    </div>
  )
}

export default VideoStyle