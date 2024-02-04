import React from 'react'
import { GiBathtub } from 'react-icons/gi'
import { CiSquareAlert } from 'react-icons/ci'
import { PiStairsLight } from 'react-icons/pi'
import { LiaBedSolid } from 'react-icons/lia'
import { LiaDollyFlatbedSolid } from 'react-icons/lia'
import { PiGarageDuotone } from 'react-icons/pi'

const TechnicalDetails = () => {
	return (
		<div className='mb-8 lg:order-2 px-8'>
			<h1 className='text-mainBlue text-[26px] font-light leading-[45px] mb-4 px-2'>Tecnical details </h1>
			<ul className=' flex flex-col gap-2 px-2  w-[355px] shrink-0 border-neutral-100 shadow-[0px_3.818px_12.41px_0px_rgba(0,0,0,0.07)] border-[0.955px] border-solid'>
				<li className='flex justify-between'>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<CiSquareAlert />
						Usable area
					</div>
					<span className='py-2 px-2'>933 ft² (86.67 m²)</span>
				</li>
				<hr />
				<li className='flex justify-between '>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<PiStairsLight />
						Number of floors
					</div>
					<span className='py-2 px-2'>1</span>
				</li>
				<hr />
				<li className='flex justify-between '>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<LiaBedSolid />
						Number of bedrooms
					</div>
					<span className='py-2 px-2'>2</span>
				</li>
				<hr />
				<li className='flex justify-between '>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<GiBathtub />
						Number of bathrooms
					</div>
					<span className='py-2 px-2'>1</span>
				</li>
				<hr />
				<li className='flex justify-between '>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<LiaDollyFlatbedSolid />
						Angle of roof pitch
					</div>
					<span className='py-2 px-2'>22°</span>
				</li>
				<hr />
				<li className='flex justify-between '>
					<div className='flex items-center gap-2 py-2 px-2 uppercase'>
						<PiGarageDuotone />
						Garage
					</div>
					<span className='py-2 px-2'>no</span>
				</li>
			</ul>
		</div>
	)
}

export default TechnicalDetails
