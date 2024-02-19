import React from 'react'

const Checkbox = ({ text, fieldName, register, style, custom, error }) => {
	return (
		<>
			<label className='flex gap-4'>
				<input type='checkbox' {...register(fieldName, custom)} className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'/>
				<span className={style}>{text}</span>
			</label>
			{error && <p className='text-red-500'>{error}</p>}
		</>
	)
}

export default Checkbox
