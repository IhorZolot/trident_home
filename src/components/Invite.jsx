import React from 'react'
import Image from 'next/image'

import { VscArrowRight } from 'react-icons/vsc'

import firstImg from '@public/images/firstPage/firstImg.png'
import secondImg from '@public/images/firstPage/secondImg.png'
import Button from '@/shared/Button/Button'

const Invite = () => {
	return (
		<section className='mb-8 px-2 lg:mb-16 lg:px-8 '>
			<Image
				src={secondImg}
				alt='Home'
				className='w-full object-cover lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500'
			/>
			<Image src={firstImg} alt='Home' className='hidden lg:block lg:w-full' />
			<a
				className='bg-mainBlue py-4 px-2 flex items-center hover:bg-yellow-500 hover:text-black transition-transform duration-900 text-white
			 lg:hidden'
				href='/catalog'
			>
				<p className='block w-[330px]'>
					A place that is more than an office - a place where you can create work-life balance
				</p>
				<VscArrowRight />
			</a>
			<p className='hidden lg:block w-[530px]  text-white text-[37px] font-medium leading-[37px] absolute top-[450px] pl-12 '>
				A place that is more than an office - a place where you can create work-life balance
			</p>
			<Button
				styleButton='hidden bg-mainBlue lg:flex lg:gap-4 lg:items-center text-white lg:px-12 lg:py-4 lg:max-w-[210px]'
				styleArrow='text-white'
				href='/catalog'
			>
				Read more
			</Button>
		</section>
	)
}
export default Invite
