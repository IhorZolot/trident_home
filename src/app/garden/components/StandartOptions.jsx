import Image from 'next/image'
import React from 'react'
import image521 from './image/image521.png'
import { SectionButton } from '@/shared/Button/SectionButton'
const StandartOptions = () => {
	return (
		<div className='mb-6 lg:px-8'>
			<h1 className='px-2 mb-6 text-[#00204A] text-[26px] font-light leading-[45px] lg:text-[46px] lg:mb-8'>
				Standart Options
			</h1>
			<div className='flex gap-4 px-2 mb-8'>
				<SectionButton styleButton>Basic Model</SectionButton>
				<SectionButton>
					Premium Model
				</SectionButton>
			</div>
			<div className='flex flex-col items-left lg:flex-row lg:justify-between lg:items-center '>
				<div>
					<div className='flex items-end justify-between text-[#00204A] text-sm font-medium leading-[102.9%] border-b-2 border-solid border-black w-[375px] gap-6 px-2 lg:w-[600px] py-4'>
						<p>Series</p>
						<p className='w-1/3 lg:'>Dimensions, L x W x H (mm)</p>
						<p className='w-1/3'>External sq.m/Internal sq.m/Terrace sq.m</p>
					</div>
					<div className='flex items-center justify-between text-[#00204A] text-sm font-medium leading-[102.9%] border-b-2 border-solid border-black w-[375px] gap-6 px-2 mb-6 lg:w-[600px] py-4'>
						<p className='w-1/3 bg-[#F5F5F5] py-6'>Basic Without terrace</p>
						<p className='w-1/3 lg:w-1/4'>
							2540 х 2250 x 2500 2540 х 3350 x 2500 2540 х 4450 x 2500 2540 х 5550 x 2500
						</p>
						<p className='w-1/3 lg:w-1/4'>5.7 / 4.2 8.5 / 6.6 11.2 / 9.0 14.0 / 11.4</p>
					</div>
				</div>
				<Image src={image521} alt='saray' />
			</div>
		</div>
	)
}

export default StandartOptions
