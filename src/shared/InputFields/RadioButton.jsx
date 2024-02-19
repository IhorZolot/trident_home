import React from 'react'

const RadioButton = ({ label, type, register }) => {
	return (
		<div className='flex flex-col gap-2 '>
			<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>{label}</span>
			<label className='flex gap-2 items-center'>
				<input
					className='border rounded-[11px] border-solid border-[#EBE9E6]'
					type='radio'
					value={1}
					{...register(type)}
				/>
				<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
				<input
					className='border rounded-[11px] border-solid border-[#EBE9E6]'
					type='radio'
					value={0}
					{...register(type)}
				/>
				<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
			</label>
		</div>
	)
}

export default RadioButton
