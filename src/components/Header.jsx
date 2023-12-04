import React from 'react'
import { TfiAlignJustify } from 'react-icons/tfi'

export const Header = () => {
	return (
		<div className='flex py-4 px-8 space-y-1 justify-between'>
			<span>W Houses</span>
			<div className='hidden lg:block '>Nav</div>
			<TfiAlignJustify className='lg:hidden' />
			<div className='hidden lg:block'>Rigth logo</div>
		</div>
	)
}
