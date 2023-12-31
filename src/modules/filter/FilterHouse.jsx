'use client'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'

const FilterHouse = ({ closeFilter }) => {
	return (
		<div className='w-auto'>
			<div className='bg-[#F0F0F0] flex py-2 justify-center'>
				<h1 className=''>Filter</h1>
				<button className='absolute end-0 right-4 lg:hidden'>
					<AiOutlineClose onClick={closeFilter} />
				</button>
			</div>
			<div className='bg-[#F5F5F5] px-4'>
				<form>
					<h2 className=' uppercase py-2'>House type</h2>
					<div className='flex flex-col gap-2 mb-4'>
						<label className='flex gap-4'>
							<input type='checkbox' className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Bungalows</span>
						</label>
						<label className='flex gap-4'>
							<input type='checkbox' className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>1.5-storey houses</span>
						</label>
						<label className='flex gap-4'>
							<input type='checkbox' className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>2-storey houses</span>
						</label>
						<label className='flex gap-4'>
							<input type='checkbox' className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>
								Garages and carports
							</span>
						</label>
					</div>
					<div className='mb-4'>
						<h2 className=' uppercase mb-2 py-2'>Special house designs</h2>
						<label className='flex gap-4'>
							<input type='checkbox' className='w-[20px] h-[20px] border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>Graven Hill</span>
						</label>
					</div>
					<div className='mb-4'>
						<h2 className=' uppercase mb-2 py-2'>Usable area</h2>
						<label className='flex items-center gap-3'>
							<input type='text' placeholder='from' className='py-4 px-4 max-w-[100px]' />
							<FiMinus />
							<input type='text' placeholder='to' className='py-4 px-4 max-w-[100px]' />
						</label>
					</div>
					<div className='mb-4'>
						<h2 className=' uppercase mb-2 py-2'>Number of rooms</h2>
						<label className='flex items-center gap-3'>
							<input type='text' placeholder='from' className='py-4 px-4 max-w-[100px]' />
							<FiMinus />
							<input type='text' placeholder='to' className='py-4 px-4 max-w-[100px]' />
						</label>
					</div>
					<div className='mb-4'>
						<label className='flex flex-col'>
							<span className=' uppercase mb-2 py-2'>Number of bathrooms</span>
							<input type='text' placeholder='Choose number' className='py-4 px-4 max-w-[250px]' />
						</label>
					</div>
					<div className='mb-4'>
						<span className='block uppercase mb-2 py-2'>Garage</span>
						<label className='flex gap-3'>
							<input type='radio' name='land' className='border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
							<input type='radio' name='land' className='border border-solid border-[#ebe9e6]' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
						</label>
					</div>
					<div className='pb-6 grid grid-cols-2'>
						<button className='bg-[#E0DFDC] px-[68px] py-4 text-black text-[10px]  font-bold leading-3 tracking-[1px] uppercase'>
							Clear
						</button>
						<button className='bg-[#F4D059] px-[68px] py-4 text-black text-[10px]  font-bold leading-3 tracking-[1px] uppercase'>
							Filter
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default FilterHouse
