'use client'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Container from '@/shared/Container/Container'
import { galleryArr } from '@/shared/Data/GalleryImgArray/gallery-image-data'
import { SectionButton } from '@/shared/Button/SectionButton'

const Gallery = () => {
	const isMobile = useMediaQuery({
		query: '(min-width: 1024px)',
	})
	return (
		<Container>
			<div className='mb-12 lg:pt-20'>
				<div className='lg:flex gap-12'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6 lg:text-[46px]'>Gallery</hi>
					<div className='flex gap-4 mb-8'>
						<SectionButton>Choose houses</SectionButton>
						<SectionButton>Choose interiors</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{galleryArr.slice(0, !isMobile ? 6 : galleryArr.length).map(item => (
						<li key={item.id}>
							<Image src={item.img} alt='img' className='w-full' />
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}

export default Gallery
