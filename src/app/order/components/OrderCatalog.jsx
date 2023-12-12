import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'

const OrderCatalog = () => {
	return (
		<div className='relative flex items-center justify-center py-[60px] px-8 lg:h-[445px] '>
			<div className='absolute inset-0 z-0'>
				<Image src={home2} alt='home' className='w-full h-full object-cover' />
			</div>
			<div className='text-center text-white z-10'>
				<h1 className='text-2xl mb-6 w-[360px] lg:text-[46px] font-medium leading-[37px]'>Order catalogue</h1>
				<p className='text-sm w-[364.207px] lg:w-[496.703px]text-center text-base font-medium leading-[23.486px]'>
					Office at home. The new hybrid model of working may have impacted your home life, and the desire to have a
					dedicated space away from home-life distractions is no less important.
				</p>
			</div>
		</div>
	)
}

export default OrderCatalog
