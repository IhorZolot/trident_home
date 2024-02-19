import React from 'react'

export const Input = ({ placeholder, fieldName, label, register, custom, style, error, id, customStyle,styleLabel }) => {
  return (
    <div>
						<label className='flex flex-col gap-2'>
						<span className={styleLabel ? 'text-black text-[11px] font-normal leading-[13px] uppercase' : customStyle}>{label}</span>
							<input
								type='text'
								id={id}
								{...register(fieldName, custom)}
								className= 'border border-solid border-[#EBE9E6] py-4 px-4 placeholder-neutral-400 focus:outline-none focus:border-yellow-400'
								placeholder={placeholder}
							/>
						</label>
						{error && <p className='text-red-500'>{error}</p>}
					</div>
  )
}
