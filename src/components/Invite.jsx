import Image from 'next/image'
import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

import home1 from '../../public/images/invite/home1.png'
import image144 from '../../public/images/invite/image144.png'

const Invite = () => {
	return (
		<div>
			<Image src={home1} alt='Home' className='lg:hidden' />
			<Image src={image144} alt='Home' className='hidden lg:block w-[1219.324px]' />
			<div className='bg-[#00204A] py-4 px-2 flex items-center lg:hidden'>
				<a href='#' className='block w-[330px] text-white '>
					A place that is more than an office - a place where you can create work-life balance
				</a>
				<VscArrowRight className='text-white' />
			</div>
			<p className='hidden lg:block w-[460.069px]  text-white text-[30px] font-medium leading-[37px] absolute top-[400px] px-4'>
				A place that is more than an office - a place where you can create work-life balance
			</p>
			<button className='hidden bg-[#00204A] lg:flex gap-3 items-center max-w-[208px] text-white px-6 py-4'>
				Read more <VscArrowRight className='text-white' />
			</button>
		</div>
	)
}
export default Invite
