'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { VscArrowRight } from 'react-icons/vsc'

import Container from '@/shared/Container/Container'
import { gardenArr } from '@/shared/Data/garden-img-data'

const GardenRoom = () => {
	const [selectedImage, setSelectedImage] = useState()

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
	}
	useEffect(() => {
		if (gardenArr.length > 0) {
			setSelectedImage(gardenArr[0].img)
		}
	}, [])
	return (
		<Container>
			<div className='flex flex-col py-6 text-[#00204A]'>
				<h1 className='text-[26px] mb-6 lg:text-[46px] lg:font-normal lg:leading-[45px]'>Garden Room</h1>
				<div className='lg:flex flex-row-reverse gap-6 justify-between'>
					<div className=''>
						<Image src={selectedImage} alt='Selected home' className='mb-2 w-full' />
						<ul className='flex gap-4 mb-8'>
							{gardenArr.map((item, id) => (
								<li key={id}>
									<button className='w-full' onClick={() => handleImageClick(item.img)}>
										<Image src={item.img} alt='img' />
									</button>
								</li>
							))}
						</ul>
					</div>

					<p className='w-full text-sm font-light leading-[22px] mb-4 lg:text-base lg:leading-[22px] lg:w-1/2 '>
						A Trident garden room can transform your garden into a place that you will use all year round, also adding
						space and value to your home. Trident offers a practical, affordable, and stylish solution to creating an
						office at home. The new hybrid model of working may have impacted your home life and the desire to have a
						dedicated space, away from home-life distractions, is now an essential part of your working day. You can now
						have that space, in your garden – Trident will design the room to suit your needs and the space available...
						<br></br>
						Building a garden house is an affordable alternative to moving house or building an extension. A garden room
						also offers you the opportunity to have an art studio, a gym, a meditation space, a yoga practice area, or
						place to entertain and relax with family and friends. We can design and build the perfect garden room to
						entertain, all year round. It can include decked area, a space for a hot tub, a barbeque area, even a
						mini-kitchen. If you have limited space, we can design a summer house perfect for a smaller garden.
					</p>
				</div>
			</div>
			<div className='lg:flex lg:gap-12 lg:items-center mb-[80px]'>
				<p className='text-[26px] font-normal leading-[29px] mb-6'>
					<span className='font-light'>Price:</span>
					£152,000
				</p>
				<button className='bg-[#F4D059] py-3 px-7'>
					<a href='/order' className='flex gap-3 items-center'>
						Order now
						<VscArrowRight />
					</a>
				</button>
			</div>
		</Container>
	)
}

export default GardenRoom
