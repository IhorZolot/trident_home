'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Container from '@/shared/Container/Container'
import { stylesArr } from '@/shared/Data/styles-home-data'
import { SectionButton } from '@/shared/Button/SectionButton'
import { useModal } from '@/hooks/useModal'
import Modal from '@/shared/Modal/Modal'

const StylesHome = () => {
	const [selectedImage, setSelectedImage] = useState(null)
	const [isImageOpen, openImage, closeImage] = useModal()

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
		openImage()
	}

	return (
		<Container>
			<div className='mb-12 lg:pt-12'>
				<div className='lg:flex gap-8'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Styles</hi>
					<div className='flex gap-2 mb-8'>
						<SectionButton>Choose houses</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{stylesArr.map(item => (
						<li key={item.id} className='relative overflow-hidden  '>
							<Image
								src={item.img}
								alt='img'
								layout='intrinsic'
								className='w-[100%] aspect-square object-cover cursor-pointer hover:scale-105'
								onClick={() => handleImageClick(item.img)}
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
export default StylesHome
