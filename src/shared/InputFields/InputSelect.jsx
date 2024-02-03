'use client'
import React from 'react'

const InputSelect = ({ register, label, options, fieldName }) => {
	return (
		<div className='flex flex-col gap-2'>
			<label htmlFor={fieldName} className='text-black text-[11px] font-normal leading-[13px] uppercase'>
				{label}
			</label>
			<select
				id={fieldName}
				{...register(fieldName)}
				className='border border-solid border-[#EBE9E6] py-4 px-4 placeholder-neutral-400 focus:outline-none focus:border-yellow-400'
			>
				<option value='' className='placeholder-neutral-400'>
					Select answer
				</option>
				{options.map(option => (
					<option key={option.id} value={option.desc}>
						{option.desc}
					</option>
				))}
			</select>
		</div>
	)
}
export default InputSelect
