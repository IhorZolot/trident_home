'use client'
import React from 'react'
import Image from 'next/image'

import { homeArr } from '@/shared/Data/home-image-data'
import { Slider } from '@/shared/Slider/Slider'
import { SectionButton } from '@/shared/Button/SectionButton'

const Designs = () => {
	return (
		<section className='px-2 lg:px-8'>
			<h1 className='text-mainBlue block text-[26px] font-light leading-[45px] mb-6'>Our house designs</h1>
			<div className='flex gap-2 mb-12 text-[15px] '>
				<SectionButton styleButton>
					<a href='/garden'>Garden rooms</a>
				</SectionButton>
				<SectionButton>
					<a href='/modular'> Мodular houses</a>
				</SectionButton>
			</div>

			<ul className='flex flex-col gap-6 mb-12 lg:hidden'>
				{homeArr.slice(0, 3).map(item => (
					<li key={item.id}>
						<Image className='w-full object-cover' src={item.img} alt='Home' />
						<h1 className='text-mainBlue text-xl font-light leading-[44px]'>{item.title}</h1>
						<p className='text-mainBlue font-light leading-[23px]'>{item.desc}</p>
					</li>
				))}
			</ul>
			<Slider data={homeArr} slidesPerView={3} custom='hidden lg:block lg:flex-row lg:gap-12 lg:mb-14' />
		</section>
	)
}
export default Designs
