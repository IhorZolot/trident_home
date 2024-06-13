'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { useModal } from '@/hooks/useModal'
import Modal from '@/shared/Modal/Modal'
import Container from '@/shared/Container/Container'
import { SectionButton } from '@/shared/Button/SectionButton'
import { galleryArr } from '@/shared/Data/GalleryImgArray/gallery-image-data'

const Gallery = () => {
	const [isImageOpen, openImage, closeImage] = useModal()
	const [selectedImage, setSelectedImage] = useState(null)
	const [selectedHouse, setselectedHouse] = useState('')

	const isMobile = useMediaQuery({
		query: '(min-width: 1024px)',
	})

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
		openImage()
	}
	const filteredHouses = selectedHouse === '' ? galleryArr : galleryArr.filter(item => item.type === selectedHouse)

	const handleStyleChange = type => {
		setselectedHouse(type)
	}
	return (
		<Container>
			<div className='mb-12 lg:pt-20'>
				<div className='lg:flex gap-12'>
					<h1 className='text-mainBlue text-[26px] block font-medium leading-[45px] mb-6 lg:text-[46px]'>Gallery</h1>
					<div className='flex gap-4 mb-8'>
						<SectionButton onClick={() => handleStyleChange('Houses')}>Choose houses</SectionButton>
						<SectionButton onClick={() => handleStyleChange('Interiors')}>Choose interiors</SectionButton>
						<SectionButton onClick={() => handleStyleChange('')}>All houses</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{filteredHouses.slice(0, !isMobile ? 6 : filteredHouses.length).map(item => (
						<li key={item.id} onClick={() => handleImageClick(item.img)}>
							<Image src={item.img} alt='img' className='w-full hover:scale-105' />
						</li>
					))}
				</ul>
			</div>
			{isImageOpen && (
				<Modal close={closeImage}>
					<div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mx-auto my-auto'>
						<Image
							src={selectedImage}
							alt='Large Image'
							className='w-[900px] object-center object-cover'
							onClick={closeImage}
						/>
					</div>
				</Modal>
			)}
		</Container>
	)
}

export default Gallery
