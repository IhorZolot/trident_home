import Button from '@/shared/Button/Button'
import React from 'react'

const GardenPrice = () => {
  return (
    <div className='px-2 mb-[80px] lg:flex lg:gap-12 lg:items-center lg:mb-8'>
				<p className='text-[26px] font-normal leading-[29px]'>
					<span className='font-light'>Price:</span>
					£152,000
				</p>
        <Button styleButton='bg-[#F4D059] py-3 px-7 flex gap-4 items-center'
  href='/order'>Order now</Button>
			</div>
  )
}

export default GardenPrice