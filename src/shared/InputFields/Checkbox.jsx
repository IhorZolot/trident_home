import React from 'react'

const Checkbox = ({text, fieldNaem, register}) => {
  return (
    <div>
						<label className='flex gap-2'>
							<input type='checkbox'
              {...register(fieldNaem)} 
               />
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								{text}
							</span>
						</label>
					</div>
  )
}

export default Checkbox