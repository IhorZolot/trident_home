import NavBar from '@/shared/NavBar/NavBar'
import React from 'react'
import { TfiAlignJustify } from 'react-icons/tfi'
import { VscArrowRight } from 'react-icons/vsc'
import { GiSydneyOperaHouse } from 'react-icons/gi'

export const Header = () => {
	return (
		<>
			<div className='flex py-4 px-8 space-y-1 w-full z-30 justify-between relative'>
				<div className='hidden lg:flex lg:bg-yellow-400 lg:w-[125px] lg:h-[125px] lg:text-[13px] uppercase lg:absolute lg:right-[36px] justify-center items-center '>
					<a href='/order' className='w-[78px]'>
						<span className='font-bold'>Order</span> Catalogue
					</a>
				</div>
				<a
					href='/'
					className='flex gap-3 items-center text-xl hover:text-blue-700 focus:outline-none focus:ring focus:border-blue-300'
				>
					<GiSydneyOperaHouse /> Houses
				</a>
				<NavBar />
				<a href='/menu'>
					<TfiAlignJustify className='lg:hidden' />
				</a>
			</div>
			<div className='bg-yellow-400 px-4 py-2 flex gap-6 justify-center items-center uppercase lg:hidden'>
				<a href='/order'>Order trident Catalogue</a>
				<VscArrowRight />
			</div>
		</>
	)
}
