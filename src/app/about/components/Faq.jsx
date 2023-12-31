'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { FaPlus } from 'react-icons/fa6'
import { FiMinus } from 'react-icons/fi'

import Container from '@/shared/Container/Container'
import faq19 from '../../../../public/images/order/faq19.png'
import { faqData } from '@/shared/Data/Faq/faqData'

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleQuestion = index => {
		setOpenIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<Container>
			<div className='text-[#00204A] mb-14 lg:flex lg:justify-around   '>
				<Image src={faq19} alt='flat' className='hidden lg:block lg:h-full' />
				<div className='lg:w-1/2'>
					<h1 className='text-[26px]font-light leading-[30px] uppercase mb-12 lg:text-[46px] lg:font-light lg:leading-[45px]'>
						Faq
					</h1>
					<ul className='w-[full] text-[#00204A] flex flex-col gap-2 lg:gap-4 '>
						{faqData.map((item, id) => (
							<li key={id} className='border-b-2 border-gray-700  '>
								<div onClick={() => toggleQuestion(id)} className='flex  justify-between gap-4 mb-4'>
									{item.question}
									{openIndex === id ? <FiMinus /> : <FaPlus />}
								</div>
								{openIndex === id && <p className='text-[15px] font-normal leading-5'>{item.answer}</p>}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Container>
	)
}
