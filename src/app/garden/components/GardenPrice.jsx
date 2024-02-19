import React from 'react'

import Button from '@/shared/Button/Button'

const GardenPrice = () => {
	return (
		<div className='px-2 mb-[80px] lg:flex lg:gap-16 lg:items-center  lg:mb-14 lg:px-8'>
			<p className='text-[26px] font-normal leading-[29px]'>
				<span className='font-light'>Price:</span>
				£152,000
			</p>
			<Button styleButton='bg-mainYellow max-w-[180px] py-3 px-9 flex gap-4 items-center' href='/order' hoverButton>
				Order now
			</Button>
		</div>
	)
}

export default GardenPrice
