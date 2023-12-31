'use client'
import Image from 'next/image'
import React from 'react'
import { VscChevronLeft } from 'react-icons/vsc'
import { VscChevronRight } from 'react-icons/vsc'
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
				<Swiper
					className='relative'
					modules={[Navigation]}
					slidesPerView={1}
					spaceBetween={15}
					loop={true}
					navigation={{
						nextEl: '.custom-swiper-button-next',
						prevEl: '.custom-swiper-button-prev',
					}}
				>
					{homeArr.map(item => (
						<SwiperSlide key={item.id}>
							<Image src={item.img} alt='photo' className='w-full object-cover' />
							<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
							<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
						</SwiperSlide>
					))}
					<div className='custom-swiper-button-next absolute top-[115px] left-0 z-10'>
						<div className='bg-[#00204A] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
							<span className='text-white'>
								<VscChevronLeft />
							</span>
						</div>
					</div>
					<div className='custom-swiper-button-prev absolute top-[115px] right-0 z-10'>
						<div className='bg-[#F4D059] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
							<span className='text-[#00204A]'>
								<VscChevronRight />
							</span>
						</div>
					</div>
				</Swiper>
			</div>
			<div className='hidden lg:flex lg:flex-row lg:gap-12'>
				<Swiper
					className='relative'
					modules={[Navigation]}
					slidesPerView={3}
					spaceBetween={15}
					loop={true}
					navigation={{
						nextEl: '.custom-swiper-button-next',
						prevEl: '.custom-swiper-button-prev',
					}}
				>
					{homeArr.map(item => (
						<SwiperSlide key={item.id}>
							<Image className='w-full object-cover' src={item.img} alt='Home' />
							<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
							<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
						</SwiperSlide>
					))}
					<div className='custom-swiper-button-next absolute top-[90px] left-0 z-10'>
						<div className='bg-[#00204A] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
							<span className='text-white'>
								<VscChevronLeft />
							</span>
						</div>
					</div>
					<div className='custom-swiper-button-prev absolute top-[90px] right-0 z-10'>
						<div className='bg-[#F4D059] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
							<span className='text-[#00204A]'>
								<VscChevronRight />
							</span>
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	)
}

export default Recomended
