import React from 'react'

export const Input = ({ placeholder, fieldNaem, label, register }) => {
  return (
    <div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>{label}</span>
							<input
								{...register(fieldNaem)}
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder={placeholder}
							/>
						</label>
					</div>
  )
}
