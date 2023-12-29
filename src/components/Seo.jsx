'use client'
import React from 'react'
import Image from 'next/image'

import { VscChevronLeft } from 'react-icons/vsc'
import { VscChevronRight } from 'react-icons/vsc'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import Container from '../shared/Container/Container'
import { seoArr, seoSmallArr } from '@/shared/Data/seo-img-data'

const Seo = () => {
	return (
		<Container>
			<div className='mb-12'>
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
						{seoSmallArr.map(items => (
							<SwiperSlide key={items.id}>
								<Image src={items.img} alt='photo' className='w-full object-cover' />
							</SwiperSlide>
						))}
						<div className='custom-swiper-button-next absolute top-[100px] left-0 z-10'>
							<div className='bg-[#00204A] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
								<span className='text-white'>
									<VscChevronLeft />
								</span>
							</div>
						</div>
						<div className='custom-swiper-button-prev absolute top-[100px] right-0 z-10'>
							<div className='bg-[#F4D059] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
								<span className='text-[#00204A]'>
									<VscChevronRight />
								</span>
							</div>
						</div>
					</Swiper>
				</div>
				<div className='hidden lg:flex mb-6 justify-center'>
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
						{seoArr.map(items => (
							<SwiperSlide key={items.id}>
								<Image src={items.img} alt='photo' />
							</SwiperSlide>
						))}
						<div className='custom-swiper-button-next absolute top-[75px] left-0 z-10'>
							<div className='bg-[#00204A] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
								<span className='text-white'>
									<VscChevronLeft />
								</span>
							</div>
						</div>
						<div className='custom-swiper-button-prev absolute top-[75px] right-0 z-10'>
							<div className='bg-[#F4D059] p-2 w-[49.178px] h-[44.479px] flex justify-center items-center '>
								<span className='text-[#00204A]'>
									<VscChevronRight />
								</span>
							</div>
						</div>
					</Swiper>
				</div>
				<div className=' text-[#00204A]'>
					<h1 className='w-[595px] text-3xl font-normal leading-[45px] mb-6'>Seo headline</h1>
					<p className='w-full text-sm font-light leading-[22.486px] lg:w-[1136.337px] '>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Seo
