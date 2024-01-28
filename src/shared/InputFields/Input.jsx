import React from 'react'

export const Input = ({ placeholder, fieldName, label, register, custom, style, error }) => {
  return (
    <div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>{label}</span>
							<input
								{...register(fieldName, custom)}
								className= {style}
								type='text'
								placeholder={placeholder}
							/>
						</label>
						{error && <p className='text-red-500'>{error}</p>}
					</div>
  )
}
