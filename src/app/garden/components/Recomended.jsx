'use client'
import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { homeArr } from '@/shared/Data/home-image-data'

const Recomended = () => {
	return (
		<div className='text-[#00204A] px-2 mb-14'>
			<h1 className=' text-[26px] font-light leading-[45px] mb-6 lg:text-[46px] lg:mb-12 lg:text-center'>
				You recently viewed
			</h1>
			<div className='mb-6 flex justify-center lg:hidden'>
				<Swiper modules={[Navigation]} slidesPerView={1} spaceBetween={15} loop={true} navigation>
					{homeArr.map(item => (
						<SwiperSlide key={item.id}>
							<Image src={item.img} alt='photo' className='w-full object-cover' />
							<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
							<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='hidden lg:flex lg:flex-row lg:gap-12'>
				<Swiper modules={[Navigation]} slidesPerView={3} spaceBetween={15} loop={true} navigation>
					{homeArr.map(item => (
						<SwiperSlide key={item.id}>
							<Image className='w-full object-cover' src={item.img} alt='Home' />
							<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
							<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default Recomended
