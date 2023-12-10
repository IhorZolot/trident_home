import Image from 'next/image'
import React from 'react'
import image53 from './image/image53.png'
import image54 from './image/image54.png'
import image55 from './image/image55.png'
import rectangle3317 from './image/rectangle3317.png'

const GardenInteriors = () => {
	return (
		<>
			<div className='bg-[#F5F5F5]  h-[303px] mb-[98px]'>
				<h1 className='px-2 py-4 text-[#00204A] text-[26px] font-light leading-[29.8px] mb-2'>Interiors</h1>
				<p className='px-2 text-[#00204A] text-sm font-light leading-[22.486px] w-[253px] mb-4'>
					Get inspired by our proposals for finishing and interior design
				</p>
				<div className='flex gap-2 px-2 mb-10'>
					<Image src={image53} alt='img' />
					<Image src={image54} alt='img' />
					<Image src={image55} alt='img' />
				</div>
				<button className='bg-[#00204A] px-8 py-6 max-w-[241px] mx-2 text-white text-xl font-light leading-[30.286px]  '>
					See more photos
				</button>
			</div>
			<div className='px-2 mb-12'>
				<Image src={rectangle3317} alt='img' />
			</div>
		</>
	)
}

export default GardenInteriors
