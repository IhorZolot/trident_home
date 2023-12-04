import Container from '@/components/Container'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { FiMinus } from 'react-icons/fi'

export const Faq = () => {
	return (
		<Container>
			<div className='text-[#00204A] mb-14'>
				<h1 className=' text-[26px]font-light leading-[30px] uppercase mb-12'>Faq</h1>
				<ul className='w-[370px] text-[15px] font-normal leading-5 flex flex-col gap-2 '>
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round be used all year round? <FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round? <FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round? <FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round? <FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round be used all year round? <FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round?
						<FaPlus />
					</li>
					<hr />
					<li className='flex gap-2 items-center justify-between'>
						Can the garden rooms be used all year round? <FiMinus />
					</li>
				</ul>
				<p className='w-[370px]'>
					The insulation in a Trident Modular garden room is second to none. The room will be warm inwinter and cool in
					summer – available to use all year round.How much input can I have in the design of my building?You tell us
					about your vision for your new garden room, and we will work with you toget the design just right. External
					and internal finishes can all be amended to suityour budget and taste. The room will reflect your own style.
				</p>
				<hr className='w-[370px]' />
			</div>
		</Container>
	)
}
