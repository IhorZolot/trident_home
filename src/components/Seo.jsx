import React from 'react'
import Image from 'next/image'

import Container from '../shared/Container/Container'
import { seoArr, seoSmallArr } from '@/shared/Data/seo-img-data'

const Seo = () => {
	return (
		<Container>
			<div className='mb-12'>
				<ul className='mb-6 flex justify-center lg:hidden'>
					{seoSmallArr.slice(0, 1).map(items => (
						<li key={items.id}>
							<Image src={items.img} alt='photo'></Image>
						</li>
					))}
				</ul>
				<ul className='hidden lg:flex mb-6  justify-center '>
					{seoArr.slice(0, 1).map(items => (
						<li key={items.id}>
							<Image src={items.img} alt='photo'></Image>
						</li>
					))}
				</ul>
				<div className=' text-[#00204A]'>
					<h1 className='w-[595px] text-3xl font-normal leading-[45px] mb-6'>Seo headline</h1>
					<p className='w-full text-sm font-light leading-[22.486px] lg:w-[1136.337px] '>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Seo
