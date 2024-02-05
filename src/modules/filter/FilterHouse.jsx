'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'

const FilterHouse = ({ closeFilter }) => {
	const { register, handleSubmit, reset } = useForm()
	const submit = data => {
		console.log(data)
		reset()
	}
	const handleClear = () => {
		reset()
	}

	return (
		<div className='w-auto'>
			<div className='bg-[#E0DFDC] flex py-2'>
				<h1 className='text-xs font-bold leading-[15px] uppercase tracking-[3.6px] px-4 py-4'>Search</h1>
				<button className='absolute end-0 right-6 top-6 lg:hidden'>
					<AiOutlineClose onClick={closeFilter} />
				</button>
			</div>
			<form onSubmit={handleSubmit(submit)} className='bg-sectionGray px-4'>
				<h2 className=' uppercase py-2'>House type</h2>
				<div className='flex flex-col gap-2 mb-4'>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							name='house'
							{...register('house')}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Bungalows</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							name='storeyHouse'
							{...register('storeyHouse')}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>1.5-storey houses</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							name='twoStoreyHouse'
							{...register('twoStoreyHouse')}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>2-storey houses</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							name='garage'
							{...register('garage')}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Garages and carports</span>
					</label>
				</div>
				<div className='mb-4'>
					<h2 className=' uppercase mb-2 py-2'>Special house designs</h2>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							name='graven'
							{...register('graven')}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Graven Hill</span>
					</label>
				</div>
				<div className='mb-4'>
					<h2 className=' uppercase mb-2 py-2'>Usable area</h2>
					<label className='flex items-center gap-3'>
						<input
							type='text'
							id='usableAreaFrom'
							name='usableAreaFrom'
							{...register('usableAreaFrom')}
							placeholder='from'
							className='py-4 px-4 max-w-[100px]'
						/>
						<FiMinus />
						<input
							type='text'
							id='usableAreaTo'
							name='usableAreaTo'
							{...register('usableAreaTo')}
							placeholder='to'
							className='py-4 px-4 max-w-[100px]'
						/>
					</label>
				</div>
				<div className='mb-4'>
					<h2 className=' uppercase mb-2 py-2'>Number of rooms</h2>
					<label className='flex items-center gap-3'>
						<input
							type='text'
							id='roomsFrom'
							name='roomsFrom'
							{...register('roomsFrom')}
							placeholder='from'
							className='py-4 px-4 max-w-[100px]'
						/>
						<FiMinus />
						<input
							type='text'
							id='roomsTo'
							name='roomsTo'
							{...register('roomsTo')}
							placeholder='to'
							className='py-4 px-4 max-w-[100px]'
						/>
					</label>
				</div>
				<div className='mb-4'>
					<label className='flex flex-col'>
						<span className=' uppercase mb-2 py-2'>Number of bathrooms</span>
						<input
							type='text'
							name='bathrooms'
							{...register('bathrooms')}
							placeholder='Choose number'
							className='py-4 px-4 max-w-[250px]'
						/>
					</label>
				</div>
				<div className='mb-4'>
					<span className='block uppercase mb-2 py-2'>Garage</span>
					<label className='flex gap-3'>
						<input
							type='radio'
							{...register('land', { required: true })}
							className='border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
						<input
							type='radio'
							{...register('land', { required: true })}
							className='border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
					</label>
				</div>
				<div className='pb-6 grid grid-cols-2'>
					<button
						className='bg-[#E0DFDC]  py-4 text-[10px] font-bold leading-3 tracking-[1px] uppercase hover:bg-gray-400 cursor-pointer'
						onClick={handleClear}
					>
						Clear
					</button>
					<button className='bg-mainYellow  py-4 text-black text-[10px]  font-bold leading-3 tracking-[1px] uppercase hover:bg-yellow-500 cursor-pointer '>
						Filter
					</button>
				</div>
			</form>
		</div>
	)
}

export default FilterHouse
