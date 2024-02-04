import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

export const Slider = ({ data, custom, slidesPerView }) => {
	return (
		<div className={custom}>
			<Swiper
				className='relative'
				modules={[Navigation]}
				slidesPerView={slidesPerView}
				spaceBetween={15}
				loop={true}
				navigation={{
					nextEl: '.custom-swiper-button-next',
					prevEl: '.custom-swiper-button-prev',
				}}
			>
				{data.map(item => (
					<SwiperSlide key={item.id}>
						<Image className='w-full object-cover' src={item.img} alt='Home' />
						<h1 className='text-mainBlue text-xl font-light leading-[44px]'>{item.title}</h1>
						<p className='text-mainBlue font-light leading-[23px]'>{item.desc}</p>
					</SwiperSlide>
				))}
				<div className='custom-swiper-button-prev absolute top-[90px] left-0 z-10 '>
					<div className='bg-mainBlue w-[49px] h-[45px] flex justify-center items-center cursor-pointer hover:bg-yellow-500'>
						<span className='text-white'>
							<VscChevronLeft />
						</span>
					</div>
				</div>
				<div className='custom-swiper-button-next absolute top-[90px] right-0 z-10 '>
					<div className='bg-[mainYellow] w-[49px] h-[45px] flex justify-center items-center cursor-pointer hover:bg-blue-500 '>
						<span className='text-mainBlue'>
							<VscChevronRight />
						</span>
					</div>
				</div>
			</Swiper>
		</div>
	)
}
