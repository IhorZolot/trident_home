import React from 'react'

const Checkbox = ({ text, fieldName, register, label, style, custom, error }) => {
	return (
		<>
			<label className='flex gap-2'>
				<input type='checkbox' label={label} {...register(fieldName, custom)} />
				<span className={style}>{text}</span>
			</label>
			{error && <p className='text-red-500'>{error}</p>}
		</>
	)
}

export default Checkbox
