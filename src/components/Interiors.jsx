import React from 'react'
import Image from 'next/image'
import { VscArrowRight } from 'react-icons/vsc'

import int11 from '../../public/images/interiors/int11.png'
import int12 from '../../public/images/interiors/int12.png'

import Container from '../shared/Container/Container'

const Interiors = () => {
	return (
		<Container>
			<div className='mb-[80px] lg:flex'>
				<div className='relative'>
					<Image src={int11} alt='Int' className='w-[95%] lg:w-[495px] lg:h-[330px]' />
					<Image
						className='absolute w-full h-[100%] z-10 top-[25px] left-[28px] lg:w-[541px] lg:h-[340px]'
						src={int12}
						alt='Int'
					/>
				</div>
				<div className='bg-[#00204A] flex flex-col items-stretch relative lg:h-[330px] lg:w-[670px]'>
					<h1 className='text-white w-[273px] text-xl font-light pl-[28px] pt-[108px] mb-[12px] lg:pl-[68px]'>
						Trident - we love inviting interiors too!
					</h1>
					<p className='text-white w-[273px] text-sm leading-[19px] pl-[28px] mb-[36px] lg:pl-[68px] lg:w-[380px]'>
						Our architects have prepared some stunning ready-made interior designs...check them out...
					</p>
					<button className='px-8 py-3 bg-yellow-400 max-w-[180px] translate-y-14 translate-x-6  '>
						<a href='/interior' className='flex gap-3 items-center'>
							Read more <VscArrowRight />
						</a>
					</button>
				</div>
			</div>
		</Container>
	)
}

export default Interiors
