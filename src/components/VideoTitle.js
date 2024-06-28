import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='w-screen h-[600px] aspect-video absolute bg-gradient-to-r from-black flex p-16'>
      <div className='flex w-4/12 flex-col self-center'>
          <h1 className='text-4xl font-bold text-white'>{title}</h1>
          <p className='text-lg text-white'>{description}</p>
          <div className='flex gap-2'>
              <button className='bg-gray-500 text-white bg-opacity-50 py-2 px-6 rounded-lg'>▶ Play</button>
              <button className='bg-gray-500 text-white py-2 px-6 bg-opacity-50 rounded-lg'>ℹ️ More info</button>
          </div>      
      </div>
    </div>
  )
}

export default VideoTitle
