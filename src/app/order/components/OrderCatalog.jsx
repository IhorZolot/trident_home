import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'

const OrderCatalog = () => {
	return (
		<div className='relative flex items-center justify-center py-[50px] px-8'>
			<div className='absolute inset-0 z-0'>
				<Image src={home2} alt='home' className='w-full h-full object-cover' />
			</div>
			<div className='text-center text-white z-10'>
				<h1 className='text-2xl mb-4 w-[360px] lg:uppercase'>Order catalogue</h1>
				<p className='text-sm w-[364.207px]'>
					Office at home. The new hybrid model of working may have impacted your home life, and the desire to have a
					dedicated space away from home-life distractions is no less important.
				</p>
			</div>
		</div>
	)
}

export default OrderCatalog
