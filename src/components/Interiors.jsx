import React from 'react'
import Image from 'next/image'

import int11 from '../../public/images/interiors/int11.png'
import int12 from '../../public/images/interiors/int12.png'
import Container from './Container'

const Interiors = () => {
	return (
		<Container>
			<div className='relative mb-10'>
				<Image src={int11} alt='Int' />
				<Image className='absolute z-10 top-[22px] left-[28px]' src={int12} alt='Int' />
				<div className=' bg-[#00204A] flex flex-col items-stretch relative'>
					<h1 className=' text-white w-[273px] text-xl font-light pl-[28px] pt-[108px] mb-[16px]'>
						Trident – we love inviting interiors too!
					</h1>

					<p className=' text-white w-[273px] text-sm leading-[19.2px] pl-[28px] mb-[36px]'>
						Our architects have prepared some stunning ready-made interior designs...check them out...
					</p>
					<button className='px-8 py-2.5 bg-yellow-400 w-[154px] '>Read more</button>
				</div>
			</div>
		</Container>
	)
}

export default Interiors
