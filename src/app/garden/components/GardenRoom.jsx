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
			<div className='flex flex-col py-6'>
				<h1 className='text-[#00204A] mb-6 lg: text-[46px] font-normal leading-[45px]'>Garden Room</h1>
				<div className='lg:flex flex-row-reverse justify-between'>
					<div className='lg:hidden'>
						<Image src={home2} alt='home' className='mb-2' />
						<div className='flex gap-2 mb-8'>
							<Image src={image48} alt='img' />
							<Image src={image49} alt='img' />
							<Image src={image50} alt='img' />
						</div>
					</div>
					<div className='hidden lg:block'>
						<Image src={imageMax11} alt='home' className='mb-2' />
						<div className='flex gap-2 mb-8'>
							<Image src={imageLg45} alt='img' />
							<Image src={imageLg46} alt='img' />
							<Image src={imageLg47} alt='img' />
						</div>
					</div>
					<p className='w-[355px] text-[#00204A] text-sm font-light leading-[22px] mb-4 lg:w-[497px] text-base leading-[33px] '>
						A Trident garden room can transform your garden into a place that you will use all year round, also adding
						space and value to your home. Trident offers a practical, affordable, and stylish solution to creating an
						office at home. The new hybrid model of working may have impacted your home life and the desire to have a
						dedicated space, away from home-life distractions, is now an essential part of your working day. You can now
						have that space, in your garden – Trident will design the room to suit your needs and the space available..
						Building a garden house is an affordable alternative to moving house or building an extension. A garden room
						also offers you the opportunity to have an art studio, a gym, a meditation space, a yoga practice area, or
						place to entertain and relax with family and friends. We can design and build the perfect garden room to
						entertain, all year round. It can include decked area, a space for a hot tub, a barbeque area, even a
						mini-kitchen. If you have limited space, we can design a summer house perfect for a smaller garden.
					</p>
				</div>
			</div>
			<div className='lg:flex gap-12 items-center lg:absolute top-[650px] '>
				<p className='mb-4'>
					Price: <span className='text-b'>£152,000</span>
				</p>
				<button className='bg-[#F4D059] py-4 px-8 mb-8 flex gap-3 items-center'>
					Order now
					<VscArrowRight />
				</button>
			</div>
		</Container>
	)
}

export default GardenRoom
