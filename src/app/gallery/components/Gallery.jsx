import Image from 'next/image'
import React from 'react'
import rectangle3287 from '../../../../public/images/gallery/rectangle3287.png'
import Container from '@/shared/Container/Container'

const Gallery = () => {
	return (
		<Container>
			<div className='py-6 mb-12'>
				<div className='lg:flex gap-8'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Gallery</hi>
					<div className='flex gap-2 mb-12'>
						<button className='px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>Choose model</button>
						<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>Choose interior</button>
					</div>
				</div>
				<ul>
					<li>
						<Image src={rectangle3287} alt='img' />
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default Gallery
