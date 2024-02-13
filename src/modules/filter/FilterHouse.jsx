'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'
import { filteredTypes } from './filteredTypes'
import { useHouses } from '@/hooks/useHouses'

const FilterHouse = ({ closeFilter }) => {
	const { register, handleSubmit, reset } = useForm()
	const { setFilteredData } = useHouses()
	const submit = data => {
		console.log(data)
		setFilteredData(data)
	}
	const handleClear = () => {
		reset()
		setFilteredData(null)
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
							{...register(filteredTypes.bungalows)}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Bungalows</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							{...register(filteredTypes.onePlusHalf)}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>1.5-storey houses</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							{...register(filteredTypes.twoStorey)}
							className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>2-storey houses</span>
					</label>
					<label className='flex gap-4'>
						<input
							type='checkbox'
							{...register(filteredTypes.garagesCarports)}
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
							{...register(filteredTypes.specialGraven)}
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
							{...register(filteredTypes.areaFrom)}
							placeholder='from'
							className='py-4 px-4 max-w-[100px]'
						/>
						<FiMinus />
						<input
							type='text'
							id='usableAreaTo'
							{...register(filteredTypes.areaTo)}
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
							{...register(filteredTypes.roomsFrom)}
							placeholder='from'
							className='py-4 px-4 max-w-[100px]'
						/>
						<FiMinus />
						<input
							type='text'
							id='roomsTo'
							{...register(filteredTypes.roomsTo)}
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
							{...register(filteredTypes.bathrooms)}
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
							{...register(filteredTypes.garage)}
							value={1}
							className='border border-solid border-[#ebe9e6]'
						/>
						<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
						<input
							type='radio'
							{...register(filteredTypes.garage)}
							value={0}
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
