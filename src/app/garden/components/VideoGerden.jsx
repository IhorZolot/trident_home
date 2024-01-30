import React from 'react'
import Image from 'next/image'

import { RiMovieLine } from 'react-icons/ri'

import rectangle3317 from './image/rectangle3317.png'
import rectangle3316 from './image/rectangle3316.png'

export const VideoGerden = () => {
  return (
    <div className='mb-12 relative px-2'>
					<Image src={rectangle3317} alt='img' className='w-full lg:hidden' />
					<Image src={rectangle3316} alt='img' className='hidden lg:block' />
					<RiMovieLine className='text-white text-6xl absolute top-[50%] left-[50%] lg:top-[120px]' />
				</div>
  )
}
