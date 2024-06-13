'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Modal from '@/shared/Modal/Modal'
import { useModal } from '@/hooks/useModal'
import { useHouses } from '@/hooks/useHouses'
import FilterHouse from '@/modules/filter/FilterHouse'
import MyPagination from '@/shared/Pagination/Pagination'
import { SortItemData } from '@/shared/SortItemData/SortItemData'
import HouseDetails from './HouseDetails'

const itemsPerPage = 6

const HouseCatalog = () => {
	const { houses, page, setPage } = useHouses()
	const [isFilterOpen, openFilter, closeFilter] = useModal()
	const [isImageOpen, openImage, closeImage] = useModal()
	const [selectedPrice, setSelectedPrice] = useState('')
	const [content, setContent] = useState()

	const uniquePrices = [...new Set(houses.map(house => house.price))]

	const getFilteredHouses = () => {
		return selectedPrice ? houses.filter(house => house.price === selectedPrice) : houses
	}
	const filteredHouses = getFilteredHouses()
	const totalPages = Math.ceil(filteredHouses.length / itemsPerPage)
	const indexOfLastItem = page * itemsPerPage
	const indexFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = filteredHouses.slice(indexFirstItem, indexOfLastItem)

	const handleOpenImage = image => {
		setContent(image)
		openImage()
	}
	const handleSortByPrice = e => {
		const { value } = e.target
		setSelectedPrice(value !== '' ? parseInt(value, 10) : '')
		setPage(1)
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
						className='bg-[#F0F0F0] text-black text-xs font-bold leading-[15px] tracking-[3.6px] uppercase py-4 mb-2 hover:bg-gray-400 cursor-pointer '
						onClick={openFilter}
					>
						Filter
					</button>
					<SortItemData
						styleButton='bg-[#F0F0F0] text-black text-xs font-bold leading-[15px] tracking-[3.6px] uppercase  py-4 px-10 mb-2 w-full hover:bg-gray-400 cursor-pointer focus:outline-none focus:border-yellow-400'
						options={uniquePrices}
						item={'Sort by price'}
						onChange={handleSortByPrice}
						value={selectedPrice}
					/>
				</div>
				<div className='px-2 mb-10'>
					<div className='hidden lg:flex lg:justify-end lg:mb-12'>
						<SortItemData
							item={'Sort by price'}
							options={uniquePrices}
							onChange={handleSortByPrice}
							value={selectedPrice}
						/>
					</div>
					<ul className='grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2 lg:gap-12 lg:mb-8'>
						{currentItems.map(item => (
							<li onClick={() => handleOpenImage(item)} key={item.id}>
								<Image className='w-full object-cover' src={item.img} alt='Home' />
								<h1 className='text-mainBlue text-xl font-light leading-[44px]'>{item.title}</h1>
								<p className='text-mainBlue font-light leading-[23px]'>{item.desc}</p>
							</li>
						))}
					</ul>
					<div className='flex justify-center items-center mb-4'>
						<MyPagination count={totalPages} />
					</div>
				</div>
				{isFilterOpen && (
					<Modal close={closeFilter}>
						<FilterHouse closeFilter={closeFilter} />
					</Modal>
				)}
				{isImageOpen && (
					<Modal close={closeImage}>
						<HouseDetails content={content} 	close={closeImage}/>
					</Modal>
				)}
			</div>
		</div>
	)
}

export default HouseCatalog
