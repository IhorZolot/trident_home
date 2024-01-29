import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

const GardenPrice = () => {
  return (
    <div className='px-2 mb-[80px] lg:flex lg:gap-12 lg:items-center lg:mb-8'>
				<p className='text-[26px] font-normal leading-[29px]'>
					<span className='font-light'>Price:</span>
					£152,000
				</p>
				<button className='bg-[#F4D059] py-3 px-7'>
					<a href='/order' className='flex gap-3 items-center'>
						Order now
						<VscArrowRight />
					</a>
				</button>
			</div>
  )
}

export default GardenPrice