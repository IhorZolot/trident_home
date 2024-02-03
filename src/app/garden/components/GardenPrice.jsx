import React from 'react'

import Button from '@/shared/Button/Button'

const GardenPrice = () => {
	return (
		<div className='px-2 mb-[80px] lg:flex lg:gap-12 lg:items-center lg:mb-8 lg:px-8'>
			<p className='text-[26px] font-normal leading-[29px] mb-4'>
				<span className='font-light'>Price:</span>
				£152,000
			</p>
			<Button styleButton='bg-[#F4D059] max-w-[180px] py-3 px-7 flex gap-4 items-center' href='/order' hoverButton>
				Order now
			</Button>
		</div>
	)
}

export default GardenPrice
