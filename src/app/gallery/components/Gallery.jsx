import Image from 'next/image'
import React from 'react'
import rectangle3287 from '../../../../public/images/gallery/rectangle3287.png'

const Gallery = () => {
	return (
		<div className='mb-12'>
			<hi>Gallery</hi>
			<div className='flex gap-2 px-2 mb-12'>
				<button className='px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>Choose model</button>
				<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>Choose interior</button>
			</div>
			<ul>
				<li>
					<Image src={rectangle3287} alt='img' />
				</li>
			</ul>
		</div>
	)
}

export default Gallery
