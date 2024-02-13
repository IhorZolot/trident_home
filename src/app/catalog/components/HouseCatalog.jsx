'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { houseData } from '@/shared/Data/home-image-data'
import { useModal } from '@/hooks/useModal'
import Modal from '@/shared/Modal/Modal'
import FilterHouse from '@/modules/filter/FilterHouse'
import MyPagination from '@/shared/Pagination/Pagination'
import { SortPrice } from './SortPrice'
import { sortByPrice } from '@/shared/Data/InputData/select-data'
import { useHouses } from '@/hooks/useHouses'

const itemsPerPage = 2

const HouseCatalog = () => {
	const [isFilterOpen, openFilter, closeFilter] = useModal()
	const [isImageOpen, openImage, closeImage] = useModal()
	const [content, setContent] = useState()
	const { houses } = useHouses()
	const handleOpenImage = image => {
		setContent(image)
		openImage()
	}
	return (
		<div>
			<div className='flex justify-between items-center lg:px-8 lg:pt-14'>
				<h1 className='text-mainBlue text-[26px] font-medium leading-[45px] py-4 px-2 lg:text-[46px]'>Catalog</h1>
				<p className='hidden lg:block lg:text-mainBlue lg:text-3xl lg:font-light lg:leading-[45px] '>
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
					<SortPrice styleButton='bg-[#F0F0F0] text-black text-xs font-bold leading-[15px] tracking-[3.6px] uppercase px-4 py-4 mb-2 w-full pl-28 hover:bg-gray-400 cursor-pointer ' />
				</div>
				<div className='px-2 mb-10'>
					<div className='hidden lg:flex lg:justify-end lg:mb-12'>
						<SortPrice />
					</div>
					<ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 lg:mb-8'>
						{houses.slice(0, 6).map(item => (
							<li onClick={() => handleOpenImage(item.img)} key={item.id}>
								<Image className='w-full object-cover' src={item.img} alt='Home' />
								<h1 className='text-mainBlue text-xl font-light leading-[44px]'>{item.title}</h1>
								<p className='text-mainBlue font-light leading-[23px]'>{item.desc}</p>
							</li>
						))}
					</ul>
					<div className='flex justify-center items-center mb-4'>
						<MyPagination items={houseData} itemsPerPage={itemsPerPage} />
					</div>
				</div>
				{isFilterOpen && (
					<Modal close={closeFilter}>
						<FilterHouse closeFilter={closeFilter} />
					</Modal>
				)}
				{isImageOpen && (
					<Modal close={closeImage}>
						<Image src={content} alt='afadsf' onClick={closeImage} />
					</Modal>
				)}
			</div>
		</div>
	)
}

export default HouseCatalog
