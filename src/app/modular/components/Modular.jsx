'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/shared/Container/Container'
import { SectionButton } from '@/shared/Button/SectionButton'
import { houseArr } from '@/shared/Data/StylesHouseArray/house-array'
import Modal from '@/shared/Modal/Modal'
import { useModal } from '@/hooks/useModal'

const Modular = () => {
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
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Modular</hi>
					<div className='flex gap-2 mb-8'>
						<SectionButton>Modular houses</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{houseArr.slice(0, 9).map(item => (
						<li key={item.id} className='relative overflow-hidden  '>
							<Image
								src={item.img}
								alt='img'
								width='100%'
								layout='intrinsic'
								className='w-[100%] aspect-square object-cover'
								onClick={() => handleImageClick(item.img)}
							/>
						</li>
					))}
				</ul>
			</div>
			{isImageOpen && (
				<Modal close={closeImage}>
					<div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mx-auto my-auto'>
						<Image src={selectedImage} alt='Large Image' className='w-full object-center object-cover' />
					</div>
				</Modal>
			)}
		</Container>
	)
}

export default Modular
