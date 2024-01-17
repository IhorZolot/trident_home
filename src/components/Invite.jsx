import Image from 'next/image'
import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

import home1 from '../../public/images/invite/home1.png'
import image144 from '../../public/images/invite/image144.png'

const Invite = () => {
	return (
		<section className='mb-8 lg:mb-16'>
			<Image src={home1} alt='Home' className='w-full object-cover lg:hidden ' />
			<Image src={image144} alt='Home' className='hidden lg:block lg:w-full' />
			<div className='bg-[#00204A] py-4 px-2 flex items-center lg:hidden'>
				<a href='/catalog' className='block w-[330px] text-white '>
					A place that is more than an office - a place where you can create work-life balance
				</a>
				<VscArrowRight className='text-white' />
			</div>
			<p className='hidden lg:block w-[460px]  text-white text-[30px] font-medium leading-[37px] absolute top-[400px] px-4'>
				A place that is more than an office - a place where you can create work-life balance
			</p>
			<button className='hidden bg-mainBlue lg:flex lg:gap-3 lg:items-center text-white lg:px-12 lg:py-4'>
				<a href='/catalog'>Read more</a>
				<VscArrowRight className='text-white' />
			</button>
		</section>
	)
}
export default Invite
