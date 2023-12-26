'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Container from '@/shared/Container/Container'
import { interiorArr } from '@/shared/Data/interior-img-data'
import image44 from '../../../../public/images/interiors/image44.png'

const Interior = () => {
	const [selectedImage, setSelectedImage] = useState()

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
	}

	return (
		<Container>
			<div className='text-[#00204A] pb-10'>
				<div className='lg:flex lg:justify-between'>
					<h1 className='text-[26px] font-medium leading-[45px] lg:mb-4'>Interior</h1>
					<p className='text-[23px] font-light leading-[45px] mb-4'>You can choose a design that you like</p>
				</div>
				<div className='flex gap-4 mb-6'>
					<button className='bg-[#F4D059] px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>
						STANDARD
					</button>
					<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>MEDITERRANEAN</button>
					<button className='hidden lg:block px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>
						SCANDINAVIAN
					</button>
				</div>
				<div className='lg:flex lg:flex-row-reverse gap-6'>
					<div className='lg:flex justify-between gap-6'>
						<h1 className='text-[23px] font-light leading-[45px] mb-6 uppercase lg:hidden'>Standard</h1>
						<div className=''>
							<Image src={selectedImage} alt='Selected Image' className='mb-4 w-full' />
							<ul className='flex gap-4 mb-8'>
								{interiorArr.map((item, id) => (
									<li key={id}>
										<button className='w-full' onClick={() => handleImageClick(item.img)}>
											<Image src={item.img} alt='img' />
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='text-[#00204A] flex flex-col gap-4 text-sm font-light leading-[22.486px] lg:top-[350px] lg:text-base lg:w-1/2'>
						<h1 className='hidden lg:text-[23px] lg:font-light lg:leading-[45px] lg:mb-6 uppercase'>Standard</h1>
						<p className='w-full'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
						<p className='w-full'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Interior
