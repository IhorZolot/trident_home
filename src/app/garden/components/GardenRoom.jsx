import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'
import image48 from '../../../../public/images/interiors/image48.png'
import image49 from '../../../../public/images/interiors/image49.png'
import image50 from '../../../../public/images/interiors/image50.png'

const GardenRoom = () => {
	return (
		<div className='flex flex-col py-4 '>
			<h1 className='px-2 mb-6'>Garden Room</h1>
			<Image src={home2} alt='home' className='mb-2' />
			<div className='flex gap-2 px-2 mb-8'>
				<Image src={image48} alt='img' />
				<Image src={image49} alt='img' />
				<Image src={image50} alt='img' />
			</div>
			<p className='w-[355px] text-[#00204A] text-sm font-light leading-[22.486px] mb-4 px-2'>
				A Trident garden room can transform your garden into a place that you will use all year round, also adding space
				and value to your home. Trident offers a practical, affordable, and stylish solution to creating an office at
				home. The new hybrid model of working may have impacted your home life and the desire to have a dedicated space,
				away from home-life distractions, is now an essential part of your working day. You can now have that space, in
				your garden – Trident will design the room to suit your needs and the space available.. Building a garden house
				is an affordable alternative to moving house or building an extension. A garden room also offers you the
				opportunity to have an art studio, a gym, a meditation space, a yoga practice area, or place to entertain and
				relax with family and friends. We can design and build the perfect garden room to entertain, all year round. It
				can include decked area, a space for a hot tub, a barbeque area, even a mini-kitchen. If you have limited space,
				we can design a summer house perfect for a smaller garden.
			</p>
			<p className='px-2 mb-4'>
				Price: <span className='text-b'>£152,000</span>
			</p>
			<button className='bg-[#F4D059] max-w-[155px] py-4 px-6 mb-8 mx-2'>Order now</button>
		</div>
	)
}

export default GardenRoom
