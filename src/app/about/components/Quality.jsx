import React from 'react'
import { priceArr } from '@/shared/Data/quality-data'

const Quality = () => {
	return (
		<ul className='grid grid-cols-1 px-2 gap-4 mb-12 bg-sectionGray py-12 lg:grid lg:grid-cols-4 lg:gap-14 lg:px-16'>
			{priceArr.map(item => (
				<li key={item.title} className='flex gap-4 items-start lg:flex-col'>
					{item.icon}
					<div className='flex flex-col gap-2 py-2'>
						<h3 className='w-[197px] text-mainBlue text-xs font-bold leading-[normal] tracking-[3.6px] uppercase mb-2'>
							{item.title}
						</h3>
						<p className='block w-[210.291px] text-mainBlue text-sm font-light'>{item.text}</p>
					</div>
				</li>
			))}
		</ul>
	)
}

export default Quality
