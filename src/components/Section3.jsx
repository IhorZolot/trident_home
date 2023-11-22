import React from 'react'
import Image from 'next/image'

import int11 from '../../public/images/section3/int11.png'
import int12 from '../../public/images/section3/int12.png'

const Section3 = () => {
	return (
		<div className='relative mb-10'>
			<Image src={int11} alt='Int' />
			<Image className='absolute z-10 top-[22px] left-[28px]' src={int12} alt='Int' />
			<div className='w-[354.557px] h-[328.02px] bg-[#00204A] flex flex-col items-stretch relative'>
				<h1 className='w-[273.012px] text-white text-2xl not-italic font-light leading-[28.4px] pl-[28px] pt-[108px] mb-[16px]'>
					Trident – we love inviting interiors too!
				</h1>
				<p className='w-[273.012px] text-white text-sm not-italic font-[275] leading-[19.2px] pl-[28px]'>
					Our architects have prepared some stunning ready-made interior designs...check them out...
				</p>
				<button className='w-[154.758px] h-[52.221px] bg-yellow-400 absolute bottom-0 left-0 '>Read more</button>
			</div>
		</div>
	)
}

export default Section3
