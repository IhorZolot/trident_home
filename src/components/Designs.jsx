'use client'
import Image from 'next/image'
import React from 'react'

import Container from '../shared/Container/Container'
import { homeArr } from '@/shared/Data/home-image-data'
import { Slider } from '@/shared/Slider/Slider'

const Designs = () => {
	return (
		<Container>
			<section>
				<h1 className='text-[#00204A] block text-[26px] font-light leading-[45px] mb-6'>Our house designs</h1>
				<div className='flex gap-2 mb-12 text-[15px] '>
					<button className='bg-yellow-400 px-4 py-3 uppercase'>
						<a href='/garden'>Garden rooms</a>
					</button>
					<button className='px-4 py-3 border border-solid border-r-8 border-[#F4D059] uppercase'>
						Мodular houses
					</button>
				</div>
			
			<ul className='flex flex-col gap-6 mb-12 lg:hidden'>
				{homeArr.slice(0, 3).map(item => (
					<li key={item.id}>
						<Image className='w-full object-cover' src={item.img} alt='Home' />
						<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
						<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
					</li>
				))}
			</ul>
			<Slider data={homeArr} slidesPerView={3} custom='hidden lg:block lg:flex-row lg:gap-12 lg:mb-14'/>
			</section>
		</Container>
	)
}
export default Designs
