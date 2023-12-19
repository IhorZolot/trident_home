import React from 'react'
import Image from 'next/image'
import { VscArrowRight } from 'react-icons/vsc'

import Container from '../shared/Container/Container'
import orderbook from '../../public/images/order/orderbook.png'

const Order = () => {
	return (
		<Container>
			<div className=' flex flex-col justify-center items-center rounded border border-neutral-100 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-solid mb-14 pt-4 px-4 pb-12 lg:flex-row lg:justify-between relative'>
				<div className='flex  flex-col justify-start items-start px-12 mb-6'>
					<h1 className=' text-[#00204A] text-[26px] font-light leading-[28px] mb-4 lg:w-[391.397px] lg:text-[46px] lg:leading-[45px] lg:mb-8'>
						Order our catalogue for free
					</h1>
					<p className='w-[312px] text-center text-sm font-light leading-[22px] lg:text-start'>
						Lorem ipsim dolor set amet lorem ipsim dolor set amet lorem ipsim dolor set amet
					</p>
				</div>
				<div className='lg:flex items-start lg:pr-[48px]'>
					<Image src={orderbook} alt='orderbook' />
				</div>
				<button className='bg-[#00204A] w-[155px] flex gap-3 items-center text-white px-5 py-3 lg:absolute left-16 bottom-8 '>
					Order now <VscArrowRight className='text-white' />
				</button>
			</div>
		</Container>
	)
}

export default Order
