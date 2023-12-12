import Image from 'next/image'
import React from 'react'
import { RiMovieLine } from 'react-icons/ri'
import { VscArrowRight } from 'react-icons/vsc'

import image53 from './image/image53.png'
import image54 from './image/image54.png'
import image55 from './image/image55.png'
import rectangle3317 from './image/rectangle3317.png'
import rectangle3316 from './image/rectangle3316.png'
import Container from '@/shared/Container/Container'

const GardenInteriors = () => {
	return (
		<Container>
			<div className='lg:w-[121px] h-[121px] bg-black absolute -z-10'></div>
			<div className='lg:flex justify-between px-6 py-6'>
				<div className='bg-[#F5F5F5] px-2 h-[303px] mb-[98px]'>
					<h1 className='py-4 text-[#00204A] text-[26px] font-light leading-[29.8px] mb-2'>Interiors</h1>
					<p className='text-[#00204A] text-sm font-light leading-[22.486px] w-[253px] mb-4'>
						Get inspired by our proposals for finishing and interior design
					</p>
					<div className='flex gap-2 mb-10'>
						<Image src={image53} alt='img' />
						<Image src={image54} alt='img' />
						<Image src={image55} alt='img' />
					</div>
					<button className='bg-[#00204A] px-8 py-6 text-white text-xl font-light flex gap-3 items-center'>
						See more photos
						<VscArrowRight className='text-white' />
					</button>
				</div>
				<div className='mb-12 relative'>
					<Image src={rectangle3317} alt='img' className='lg:hidden' />
					<Image src={rectangle3316} alt='img' className='hidden lg:block' />
					<RiMovieLine className='text-white text-6xl absolute top-[80px] left-[50%] lg:top-[120px]' />
				</div>
			</div>
		</Container>
	)
}

export default GardenInteriors
