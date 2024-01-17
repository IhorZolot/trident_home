'use client'
import React from 'react'
import { homeArr } from '@/shared/Data/home-image-data'
import { Slider } from '@/shared/Slider/Slider'

const Recomended = () => {
	return (
		<div className='text-[#00204A] px-2 mb-14'>
			<h1 className=' text-[26px] font-light leading-[45px] mb-6 lg:text-[46px] lg:mb-12 lg:text-center'>
				You recently viewed
			</h1>
			<Slider data={homeArr} slidesPerView={1} custom='mb-6 flex justify-center lg:hidden'/>
				<Slider data={homeArr} slidesPerView={3} custom='hidden lg:flex mb-6 justify-center'/>
		</div>
	)
}

export default Recomended
