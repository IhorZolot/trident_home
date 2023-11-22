import Image from 'next/image'
import React from 'react'
import home from '../../public/images/section1/home.png'

const Section1 = () => {
	return (
		<>
			<div className='bg-yellow-400 w-[375px] h-[28px] flex justify-center '>
				<a href='#' className=''>
					Order trident Catalogue
				</a>
			</div>
			<Image src={home} alt='Home' />
			<div className='bg-blue-900 w-[375px] h-[113px] py-4 px-2'>
				<a href='#' className='block w-[330px] text-white'>
					A place that is more than an office - a place where you can create work-life balance
				</a>
			</div>
		</>
	)
}
export default Section1
