import Image from 'next/image'
import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

import home2 from '../../../../public/images/designs/home2.png'
import image48 from '../../../../public/images/interiors/image48.png'
import image49 from '../../../../public/images/interiors/image49.png'
import image50 from '../../../../public/images/interiors/image50.png'
import imageMax11 from './image/imageMax11.png'
import imageLg45 from './image/imageLg45.png'
import imageLg46 from './image/imageLg46.png'
import imageLg47 from './image/imageLg47.png'

import Container from '@/shared/Container/Container'

const GardenRoom = () => {
	return (
		<Container>
			<div className='flex flex-col py-6 text-[#00204A]'>
				<h1 className='text-[26px] mb-6 lg:text-[46px] lg:font-normal lg:leading-[45px]'>Garden Room</h1>
				<div className='lg:flex flex-row-reverse gap-6 justify-between'>
					<div className='lg:hidden'>
						<Image src={home2} alt='home' className='mb-2 w-full' />
						<div className='flex gap-2 mb-8 w-full'>
							<Image src={image48} alt='img' className='w-full' />
							<Image src={image49} alt='img' className='w-full' />
							<Image src={image50} alt='img' className='w-full' />
						</div>
					</div>
					<div className='hidden lg:block w-1/2'>
						<Image src={imageMax11} alt='home' className='mb-2 w-full' />
						<div className='flex gap-2 mb-8 w-full'>
							<Image src={imageLg45} alt='img' className='w-full' />
							<Image src={imageLg46} alt='img' className='w-full' />
							<Image src={imageLg47} alt='img' className='w-full' />
						</div>
					</div>
					<p className='w-full text-sm font-light leading-[22px] mb-4 lg:text-base lg:leading-[22px] lg:w-1/2 '>
						A Trident garden room can transform your garden into a place that you will use all year round, also adding
						space and value to your home. Trident offers a practical, affordable, and stylish solution to creating an
						office at home. The new hybrid model of working may have impacted your home life and the desire to have a
						dedicated space, away from home-life distractions, is now an essential part of your working day. You can now
						have that space, in your garden – Trident will design the room to suit your needs and the space available..
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
				<p className='mb-4'>
					Price: <span className='text-b'>£152,000</span>
				</p>
				<button className='bg-[#F4D059] py-4 px-8 mb-8'>
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
