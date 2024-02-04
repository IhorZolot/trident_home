import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

export const FormButton = () => {
	return (
		<button
			type='submit'
			className='flex bg-mainYellow justify-center items-center pl-[76px] pr-[77.733px] pt-[17px] pb-[18px] uppercase mb-6 max-w-[300px] gap-3 hover:bg-blue-800 hover:text-white transition-transform duration-900 cursor-pointer'
		>
			Get request
			<VscArrowRight />
		</button>
	)
}
