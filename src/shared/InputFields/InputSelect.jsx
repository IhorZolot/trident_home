'use client'
import React, { useState } from 'react'

const InputSelect = ({ register, label, options, fieldName }) => {
	const [selectedAnswer, setSelectedAnswer] = useState('')

	const handleSelectChange = event => {
		const value = event.target.value
		setSelectedAnswer(value)
	}

	return (
		<div className='flex flex-col gap-2'>
			<label htmlFor='answer' className='text-black text-[11px] font-normal leading-[13px] uppercase'>{label}</label>
			<select
  id='answer'
  value={selectedAnswer}
  onChange={handleSelectChange}
	// {...register(fieldName)}
  className='border border-solid border-[#EBE9E6] py-4 px-4 placeholder-neutral-400 focus:outline-none focus:border-yellow-400'
>
<option value='' className='placeholder-neutral-400'>
					Select answer
				</option>
				{options.map(option => (
					<option key={option.id} value={option.id} >
						{option.desc}
					</option>
  ))}
</select>
		</div>
	)
}
export default InputSelect
