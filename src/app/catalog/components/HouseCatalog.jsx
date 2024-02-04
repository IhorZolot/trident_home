'use client'
import React from 'react'
import Image from 'next/image'

import { homeArr } from '@/shared/Data/home-image-data'
import { useModal } from '@/hooks/useModal'
import Modal from '@/shared/Modal/Modal'
import FilterHouse from '@/modules/filter/FilterHouse'
import MyPagination from '@/shared/Pagination/Pagination'
import InputSelect from '@/shared/InputFields/InputSelect'
import { sortByPrice } from '@/shared/Data/InputData/select-data'
import { useForm } from 'react-hook-form'

const itemsPerPage = 2

const HouseCatalog = () => {
	const [isFilterOpen, openFilter, closeFilter] = useModal()
	// const { register, handleSubmit, reset } = useForm()
	// const submit = data => {
	// 	console.log(data)
	// 	reset()
	// }

	return (
		<div>
			<div className='flex justify-between items-center lg:px-8 lg:pt-14'>
				<h1 className='text-mainBlue text-[26px] font-medium leading-[45px] py-4 px-2 lg:text-[46px]  '>Catalog</h1>
				<p className='hidden lg:block lg:text-mainBlue lg:text-4xl lg:font-light lg:leading-[45px] '>
					You can choose house that yoy like
				</p>
			</div>
			<div className='lg:grid gap-4 grid-cols-[1.7fr_3fr] lg:px-8 lg:pt-12 '>
				<div className='hidden lg:block'>
					<FilterHouse />
				</div>
				<div className='grid grid-cols-2 gap-[8px] px-2 mb-12 lg:hidden'>
					<button
						className='bg-[#F0F0F0] text-black text-xs font-bold leading-[15px] tracking-[3.6px] uppercase px-14 py-4 mb-2 hover:bg-gray-400 cursor-pointer '
						onClick={openFilter}
					>
						Filter
					</button>
					<button className='bg-[#F0F0F0] text-black text-xs  font-bold leading-[15px] tracking-[3.6px] uppercase px-4 py-4 mb-2 hover:bg-gray-400 cursor-pointer '>
						Sort by price
					</button>
				</div>
				<div className='px-2 mb-10'>
					<select className='hidden lg:block ml-auto mb-8'>
						<option value=''> Sort by price</option>
						<option value='2000'>$2000</option>
						<option value='3000'>$3000</option>
						<option value='4000'>$4000</option>
						<option value='5000'>$5000</option>
					</select>
					<ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 lg:mb-8'>
						{homeArr.slice(0, 6).map(item => (
							<li key={item.id}>
								<Image className='w-full object-cover' src={item.img} alt='Home' />
								<h1 className='text-mainBlue text-xl font-light leading-[44px]'>{item.title}</h1>
								<p className='text-mainBlue font-light leading-[23px]'>{item.desc}</p>
							</li>
						))}
					</ul>
					<div className='flex justify-center items-center mb-4'>
						<MyPagination items={homeArr} itemsPerPage={itemsPerPage} />
					</div>
				</div>
				{isFilterOpen && (
					<Modal close={closeFilter}>
						<FilterHouse closeFilter={closeFilter} />
					</Modal>
				)}
			</div>
		</div>
	)
}

export default HouseCatalog
