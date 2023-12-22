import Image from 'next/image'
import React from 'react'
import Container from '@/shared/Container/Container'
import { galleryArr } from '@/shared/Data/gallery-image-data'

const Gallery = () => {
	return (
		<Container>
			<div className='mb-12'>
				<div className='lg:flex gap-8'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Gallery</hi>
					<div className='flex gap-2 mb-8'>
						<button className='px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>Choose model</button>
						<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>Choose interior</button>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{galleryArr.slice(0, 6).map(item => (
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
