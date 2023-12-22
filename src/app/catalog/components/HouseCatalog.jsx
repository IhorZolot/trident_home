import Image from 'next/image'
import React from 'react'
import { homeArr } from '@/shared/Data/home-image-data'

const HouseCatalog = () => {
	return (
		<div>
			<h1 className='text-[#00204A] text-[26px] font-medium leading-[45px] py-4 px-2 lg:text-[46px] lg:-translate-x-[400px] '>
				Catalog
			</h1>
			<div className='flex gap-[8px] px-2 mb-12 lg:hidden'>
				<button className='bg-[#F0F0F0] text-black text-xs not-italic font-bold leading-[15px] tracking-[3.6px] uppercase px-14 py-4 mb-2'>
					<a>Filter</a>
				</button>
				<button className='bg-[#F0F0F0] text-black text-xs not-italic font-bold leading-[15px] tracking-[3.6px] uppercase px-4 py-4 mb-2'>
					<a>Sort by price</a>
				</button>
			</div>
			<div className='px-2 mb-10'>
				<ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 mb-14'>
					{homeArr.map(item => (
						<li key={item.id}>
							<Image className='w-full object-cover' src={item.img} alt='Home' />
							<h1 className='text-[#00204A] text-xl font-light leading-[44px]'>{item.title}</h1>
							<p className='text-[#00204A] font-light leading-[23px]'>{item.desc}</p>
						</li>
					))}
				</ul>
			</div>
			<div className='flex justify-center items-center'>Pagination</div>
		</div>
	)
}

export default HouseCatalog
