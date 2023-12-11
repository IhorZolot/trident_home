import navLinks from '@/shared/Data/nav-links'
import React from 'react'
import { TfiAlignJustify } from 'react-icons/tfi'
import { VscArrowRight } from 'react-icons/vsc'

export const Header = () => {
	return (
		<>
			<div className='flex py-4 px-8 space-y-1 justify-between'>
				<span>W Houses</span>
				<ul className='hidden lg:flex gap-8'>
					{navLinks.map(item => (
						<li key={item}>
							<a href='#'>{item}</a>
						</li>
					))}
				</ul>
				<TfiAlignJustify className='lg:hidden' />
				<div className='hidden lg:flex justify-center items-center bg-yellow-400 w-[125px] h-[125px] text-[13px] font-light leading-[15.8px] uppercase right-0'>
					<p className='w-[78.427px]'>
						<span className='font-bold'>Order</span> Catalogue
					</p>
				</div>
			</div>
			<div className='bg-yellow-400 px-4 py-2 flex gap-6 justify-center items-center uppercase lg:hidden'>
				<a href='#'>Order trident Catalogue</a>
				<VscArrowRight />
			</div>
		</>
	)
}
