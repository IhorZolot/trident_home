'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Modal from '@/shared/Modal/Modal'
import { useModal } from '@/hooks/useModal'
import { useHouses } from '@/hooks/useHouses'
import Container from '@/shared/Container/Container'
import MyPagination from '@/shared/Pagination/Pagination'
import { SortItemData } from '@/shared/SortItemData/SortItemData'
import { houseArr, sortByHouses } from '@/shared/Data/StylesHouseArray/house-array'

const itemsPerPage = 9

const Modular = () => {
	const [isImageOpen, openImage, closeImage] = useModal()
	const [selectedImage, setSelectedImage] = useState()
	const [selectedStyle, setSelectedStyle] = useState('')
	const { page, setPage } = useHouses()

	const filteredHouses = selectedStyle === '' ? houseArr : houseArr.filter(item => item.style === selectedStyle)

	const indexOfLastItem = page * itemsPerPage
	const indexFirstItem = indexOfLastItem - itemsPerPage
	const modular = filteredHouses.slice(indexFirstItem, indexOfLastItem)

	const handleSortChange = e => {
		const selectedStyle = e.target.value
		setSelectedStyle(selectedStyle)
		setPage(1)
	}

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
		openImage()
	}
	return (
		<Container>
			<div className='mb-12 lg:pt-12'>
				<div className='lg:flex gap-8'>
					<h1 className='text-mainBlue text-[26px] block font-medium leading-[45px] mb-6'>Modular</h1>
					<div className='flex gap-6 mb-8'>
						<SortItemData
							styleButton='px-4 py-3 border border-solid border-r-8 border-mainYellow uppercase hover:border-yellow-700 hover: hover:bg-yellow-700  hover:text-white transition-transform duration-900transition-delay-500'
							options={sortByHouses}
							item='Modular houses'
							onChange={handleSortChange}
						/>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{modular.map(item => (
						<li key={item.id} onClick={() => handleImageClick(item.img)} className='relative overflow-hidden'>
							<Image
								src={item.img}
								alt='img'
								layout='responsive'
								className='w-[100%] aspect-square object-cover cursor-pointer hover:scale-105'
							/>
						</li>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center mb-4'>
				<MyPagination count={Math.ceil(filteredHouses.length / itemsPerPage)} />
			</div>
			{isImageOpen && (
				<Modal close={closeImage}>
					<div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mx-auto my-auto'>
						<Image
							src={selectedImage}
							alt='Large Image'
							className='w-full object-center object-cover'
							onClick={closeImage}
						/>
					</div>
				</Modal>
			)}
		</Container>
	)
}

export default Modular
