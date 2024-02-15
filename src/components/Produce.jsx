import React from 'react'
import Image from 'next/image'

import Container from '../shared/Container/Container'
import produce1 from '../../public/images/produce1.png'
import { qualityArr } from '@/shared/Data/quality-data'

const Produce = () => {
	return (
		<Container>
			<div className='mb-8 lg:flex lg:gap-12 lg:justify-between lg:mb-14'>
				<div>
					<span className='block w-[355px] text-mainBlue text-[26px] font-light leading-[30px] mb-[54px] lg:w-[480px] lg:text-2xl lg:mb-[60px]'>
						Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used
						as temporary as well as permanent residence.
					</span>
					<ul className='grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-16'>
						{qualityArr.map(item => (
							<li key={item.title}>
								<div className='flex gap-2 items-center'>
									{item.icon}
									<h3 className='w-[165px] text-mainBlue text-xs font-bold leading-[normal] tracking-[3.6px] uppercase'>
										{item.title}
									</h3>
								</div>
								<p className='block w-[210px] text-mainBlue text-sm font-light ml-12'>{item.text}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='hidden lg:block'>
					<Image src={produce1} alt='produce1' />
				</div>
			</div>
		</Container>
	)
}

export default Produce
