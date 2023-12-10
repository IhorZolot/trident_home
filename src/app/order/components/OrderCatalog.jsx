import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'

const OrderCatalog = () => {
	return (
		<div className=' flex flex-col fill-[linear-gradient(358deg,rgba(0,32,74,0.69)_59.83%,rgba(0,32,74,0.00)_120.08%)]'>
			<Image src={home2} alt='home' />
			<h1 className='absolute top-[140px] text-white text-[26px]'>Order catalogue</h1>
			<p className='absolute w-[310px] top-[180px] text-white text-center text-sm'>
				office at home. The new hybrid model of working may have impacted your home life and the desire to have a
				dedicated space, away from home-life distractions, is no
			</p>
		</div>
	)
}

export default OrderCatalog
