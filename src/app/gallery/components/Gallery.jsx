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
	const [selectedImage, setSelectedImage] = useState(null)
	const [isImageOpen, openImage, closeImage] = useModal()
	const isMobile = useMediaQuery({
		query: '(min-width: 1024px)',
	})

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
		openImage()
	}

	return (
		<Container>
			<div className='mb-12 lg:pt-20'>
				<div className='lg:flex gap-12'>
					<h1 className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6 lg:text-[46px]'>Gallery</h1>
					<div className='flex gap-4 mb-8'>
						<SectionButton>Choose houses</SectionButton>
						<SectionButton>Choose interiors</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{galleryArr.slice(0, !isMobile ? 6 : galleryArr.length).map(item => (
						<li key={item.id}>
							<Image
								src={item.img}
								alt='img'
								onClick={() => handleImageClick(item.img)}
								className='w-full cursor-pointer hover:scale-105'
							/>
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
							className='w-full object-center object-cover'
							onClick={closeImage}
						/>
					</div>
				</Modal>
			)}
		</Container>
	)
}

export default Gallery
