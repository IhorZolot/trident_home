import Image from 'next/image'
import React from 'react'
import home2 from '../../public/images/designs/home2.png'
import home3 from '../../public/images/designs/home3.png'
import home4 from '../../public/images/designs/home4.png'
import Container from './Container'

const Designs = () => {
	return (
		<Container>
			<h1 className='text-[#00204A] text-[26px] not-italic font-light leading-[45px] px-2 mt-6'>Our house designs</h1>
			<div className='flex gap-2 px-2 mb-12'>
				<button className='bg-yellow-400 w-[145.775px] h-[46.067px]'>Garden rooms</button>
				<button className='w-[164.231px] h-[46.067px]  border border-solid border-r-8 border-[#F4D059]'>
					Мodular houses
				</button>
			</div>
			<ul className='flex flex-col justify-center gap-2'>
				<li>
					<Image src={home2} alt='Home' />
					<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Room</h2>
					<p className='mb-8'>A room where you can work, study, and design</p>
				</li>
				<li>
					<Image src={home3} alt='Home' />
					<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Salon</h2>
					<p className='mb-8'>A room where you can work, study, and design</p>
				</li>
				<li>
					<Image src={home4} alt='Home' />
					<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Commercial Workspace</h2>
					<p className='mb-8'>A room where you can work, study, and design</p>
				</li>
			</ul>
		</Container>
	)
}
export default Designs
