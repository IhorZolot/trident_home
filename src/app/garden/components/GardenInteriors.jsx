import React from 'react'
import Image from 'next/image'

import image53 from './image/image53.png'
import image54 from './image/image54.png'
import image55 from './image/image55.png'
import Button from '@/shared/Button/Button'

const GardenInteriors = () => {
	return (
		<div className='lg:px-8 '>
			<div className='lg:w-[121px] lg:h-[121px] bg-[#F4D059] absolute -z-10'></div>
			<div className='lg:flex justify-between lg:px-6 lg:py-6'>
				<div className='bg-[#F5F5F5] px-2 mb-[98px]'>
					<h1 className='py-4 text-[#00204A] text-[26px] font-light leading-[29.8px] mb-2'>Interiors</h1>
					<p className='text-[#00204A] text-sm font-light leading-[22.486px] w-2/3 mb-4'>
						Get inspired by our proposals for finishing and interior design
					</p>
					<div className='flex gap-2 mb-10'>
						<Image src={image53} alt='img' className='w-1/3' />
						<Image src={image54} alt='img' className='w-1/3' />
						<Image src={image55} alt='img' className='w-1/3' />
					</div>
					<Button
						styleButton='bg-[#00204A] px-4 py-4 text-white text-xl font-light translate-y-8 lg:translate-x-[160px] flex gap-2 items-center max-w-[245px] '
						styleArrow='text-white'
						href='/styles'
					>
						See more photos
					</Button>
				</div>
			</div>
		</div>
	)
}

export default GardenInteriors
