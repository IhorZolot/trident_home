import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'
import home3 from '../../../../public/images/designs/home3.png'

const HouseCatalog = () => {
	return (
		<div>
			<h1 className='text-[#00204A] text-[26px] font-medium leading-[45px]  py-4 px-2'>Catalog</h1>
			<div className='flex gap-[8px] px-2 mb-12'>
				<button className='bg-[#F0F0F0] text-black text-xs not-italic font-bold leading-[15px] tracking-[3.6px] uppercase px-14 py-4 mb-2'>
					Filter
				</button>
				<button className='bg-[#F0F0F0] text-black text-xs not-italic font-bold leading-[15px] tracking-[3.6px] uppercase px-4 py-4 mb-2'>
					Sort by price
				</button>
			</div>
			<div className='px-2 mb-10'>
				<ul className='flex flex-col justify-center'>
					<li>
						<Image src={home2} alt='Home' />
						<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Room</h2>
						<p className='mb-8'>A room where you can work, study, and design</p>
					</li>
					<li>
						<Image src={home3} alt='Home' />
						<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Room</h2>
						<p className='mb-8'>A room where you can work, study, and design</p>
					</li>
				</ul>
			</div>
			<div className='flex justify-center items-center'>Pagination</div>
		</div>
	)
}

export default HouseCatalog
