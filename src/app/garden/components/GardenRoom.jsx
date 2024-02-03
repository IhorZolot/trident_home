'use client'
import { useState } from 'react'

import { interiorArr } from '@/shared/Data/InteriorImgArr/interior-img-data'
import SliderImage from '@/shared/SliderState/SliderState'

const GardenRoom = () => {
	const [selectedStyle, setSelectedStyle] = useState('scan')
	const handleStyleChange = style => {
		setSelectedStyle(style)
	}

	return (
		<div className='flex flex-col py-6 text-[#00204A] lg:pt-24 lg:px-8 '>
			<h1 className='text-[26px] mb-6 lg:text-[46px] lg:font-normal lg:leading-[45px]'>Garden Room</h1>
			<div className='lg:flex flex-row-reverse gap-6 justify-between'>
				<div className='lg:w-1/2'>
					<SliderImage
						images={interiorArr}
						custom='lg:px-2'
						selectedStyle={selectedStyle}
						handleStyleChange={handleStyleChange}
					/>
				</div>
				<div className='w-full text-sm font-light leading-[22px] mb-4 lg:text-base lg:leading-[22px] lg:w-1/2 '>
					<p className='mb-4 px-2'>
						A Trident garden room can transform your garden into a place that you will use all year round, also adding
						space and value to your home. Trident offers a practical, affordable, and stylish solution to creating an
						office at home. The new hybrid model of working may have impacted your home life and the desire to have a
						dedicated space, away from home-life distractions, is now an essential part of your working day. You can now
						have that space, in your garden – Trident will design the room to suit your needs and the space available...
					</p>
					<p className='mb-4 px-2'>
						Building a garden house is an affordable alternative to moving house or building an extension. A garden room
						also offers you the opportunity to have an art studio, a gym, a meditation space, a yoga practice area, or
						place to entertain and relax with family and friends. We can design and build the perfect garden room to
						entertain, all year round. It can include decked area, a space for a hot tub, a barbeque area, even a
						mini-kitchen. If you have limited space, we can design a summer house perfect for a smaller garden.
					</p>
				</div>
			</div>
		</div>
	)
}

export default GardenRoom
