import React from 'react'
import Image from 'next/image'

import { VscArrowRight } from 'react-icons/vsc'

import home1 from '../../public/images/invite/home1.png'
import image144 from '../../public/images/invite/image144.png'
import Button from '@/shared/Button/Button'

const Invite = () => {
	return (
		<section className='mb-8 lg:mb-16'>
			<Image src={home1} alt='Home' className='w-full object-cover lg:hidden ' />
			<Image src={image144} alt='Home' className='hidden lg:block lg:w-full' />
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
			<p className='hidden lg:block w-[460px]  text-white text-[30px] font-medium leading-[37px] absolute top-[400px] px-4'>
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
