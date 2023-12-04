import React from 'react'
import { TfiAlignJustify } from 'react-icons/tfi'

export const Header = () => {
	return (
		<>
			<div className='flex py-4 px-8 space-y-1 justify-between'>
				<span>W Houses</span>
				<div className='hidden lg:block '>Nav</div>
				<TfiAlignJustify className='lg:hidden' />
				<div className='hidden lg:block bg-yellow-400 w-[125px]'>Order Catalogue</div>
			</div>
			<div className='bg-yellow-400 px-4 py-2 flex justify-center lg:hidden'>
				<a href='#' className=''>
					Order trident Catalogue
				</a>
			</div>
		</>
	)
}
