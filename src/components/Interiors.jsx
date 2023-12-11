import React from 'react'
import Image from 'next/image'
import { VscArrowRight } from 'react-icons/vsc'

import int11 from '../../public/images/interiors/int11.png'
import int12 from '../../public/images/interiors/int12.png'
import int111 from '../../public/images/interiors/int11.png'
import int112 from '../../public/images/interiors/int12.png'
import Container from '../shared/Container/Container'

const Interiors = () => {
	return (
		<Container>
			<div className='mb-10 lg:flex'>
				<div className='relative'>
					<Image src={int11} alt='Int' className='lg:w-[495.233px] h-[330.317px]' />
					<Image
						className='absolute z-10 top-[25px] left-[28px] lg:w-[541.953px] h-[339.596px]'
						src={int12}
						alt='Int'
					/>
				</div>
				<div className=' bg-[#00204A] flex flex-col items-stretch relative lg:h-[330.317px] w-[670px] mb-8'>
					<h1 className=' text-white w-[273px] text-xl font-light pl-[28px] pt-[108px] mb-[16px] lg:pl-[68px]  '>
						Trident – we love inviting interiors too!
					</h1>
					<p className=' text-white w-[273px] text-sm leading-[19.2px] pl-[28px] mb-[36px] lg:pl-[68px] w-[380.739px]  '>
						Our architects have prepared some stunning ready-made interior designs...check them out...
					</p>
					<button className='flex gap-3 items-center px-8 py-3 bg-yellow-400 max-w-[180px] lg:absolute  bottom-0 left-6'>
						Read more <VscArrowRight />
					</button>
				</div>
			</div>
		</Container>
	)
}

export default Interiors
