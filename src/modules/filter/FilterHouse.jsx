'use client'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { filteredTypes } from './filteredTypes'
import { useHouses } from '@/hooks/useHouses'
import { Input } from '@/shared/InputFields/Input'
import Checkbox from '@/shared/InputFields/Checkbox'
import RadioButton from '@/shared/InputFields/RadioButton'

const FilterHouse = ({ closeFilter }) => {
	const { register, handleSubmit, reset } = useForm()
	const { setFilteredData, setPage } = useHouses()
	const submit = data => {
		console.log(data)
		setFilteredData(data)
		setPage(1)
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
					<Checkbox
						text='Bungalows'
						register={register}
						fieldName={filteredTypes.bungalows}
						style='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'
					/>
					<Checkbox
						text='1.5-storey houses'
						register={register}
						fieldName={filteredTypes.onePlusHalf}
						style='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'
					/>
					<Checkbox
						text='2-storey houses'
						register={register}
						fieldName={filteredTypes.twoStorey}
						style='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'
					/>
					<Checkbox
						text='Garages and carports'
						register={register}
						fieldName={filteredTypes.garagesCarports}
						style='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'
					/>
				</div>
				<div className='mb-4'>
					<h2 className=' uppercase mb-2 py-2'>Special house designs</h2>
					<Checkbox
						text='Graven Hill'
						register={register}
						fieldName={filteredTypes.specialGraven}
						style='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'
					/>
				</div>
				<div className='mb-4'>
					<h2 className='uppercase mb-2 py-2'>Usable area</h2>
					<label className='flex items-center gap-3'>
						<Input
							register={register}
							placeholder='from'
							fieldName={filteredTypes.areaFrom}
							id='usableAreaFrom'
						/>
						<FiMinus />
						<Input
							register={register}
							placeholder='to'
							id='usableAreaTo'
							fieldName={filteredTypes.areaTo}
						/>
					</label>
				</div>
				<div className='mb-4'>
					<h2 className=' uppercase mb-2 py-2'>Number of rooms</h2>
					<label className='flex items-center gap-3'>
						<Input
							register={register}
							placeholder='from'
							fieldName={filteredTypes.roomsFrom}
							id='roomsFrom'
						/>
						<FiMinus />
						<Input
							register={register}
							placeholder='to'
							id='roomsTo'
							fieldName={filteredTypes.roomsTo}
						/>
					</label>
				</div>
				<div className='mb-4'>
					<Input
					label='Number of bathrooms'
					register={register}
					placeholder='Choose number'
					fieldName={filteredTypes.bathrooms}
					customStyle=' uppercase mb-2 py-2'
					/>
				</div>
				<div className='mb-4'>
					<span className='block uppercase py-2'>Garage</span>
					<RadioButton
    type={filteredTypes.garage}
    register={register}
  />
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
