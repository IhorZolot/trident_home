import Image from 'next/image'
import React from 'react'
import home2 from '../../public/images/designs/home2.png'
import home3 from '../../public/images/designs/home3.png'
import home4 from '../../public/images/designs/home4.png'
import Container from '../shared/Container/Container'

const Designs = () => {
	return (
		<Container>
			<div className='pt-8'>
				<h1 className='text-[#00204A] block text-[26px] font-light leading-[45px] px-2 mb-6'>Our house designs</h1>
				<div className='flex gap-2 px-2 mb-12 text-[15px] '>
					<button className='bg-yellow-400 px-4 py-3 uppercase'>Garden rooms</button>
					<button className='px-4 py-3 border border-solid border-r-8 border-[#F4D059] uppercase'>
						Мodular houses
					</button>
				</div>
			</div>
			<ul className='flex flex-col  lg:flex-row gap-12'>
				<li>
					<Image src={home2} alt='Home' />
					<h2 className='text-[#00204A] text-xl font-light leading-[44px]'>Garden Room</h2>
					<p className='text-[#00204A] text-base font-light leading-[23px] mb-8'>
						A room where you can work, study, and design
					</p>
				</li>
				<li>
					<Image src={home3} alt='Home' />
					<h2 className='text-[#00204A] text-xl font-light leading-[44px]'>Garden Salon</h2>
					<p className='text-[#00204A] text-base font-light leading-[23px] mb-8'>
						A room where you can work, study, and design
					</p>
				</li>
				<li>
					<Image src={home4} alt='Home' />
					<h2 className='text-[#00204A] text-xl font-light leading-[44px]'>Commercial Workspace</h2>
					<p className='text-[#00204A] text-base font-light leading-[23px] mb-8'>
						A room where you can work, study, and design
					</p>
				</li>
			</ul>
		</Container>
	)
}
export default Designs
