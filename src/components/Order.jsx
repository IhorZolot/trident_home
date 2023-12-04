import React from 'react'
import Container from './Container'
import Image from 'next/image'
import orderbook from '../../public/images/order/orderbook.png'

const Order = () => {
	return (
		<Container>
			<div className=' flex flex-col justify-center rounded border border-neutral-100 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-solid mb-12 pt-4 px-4 pb-12'>
				<h1 className='w-[325px] text-[#00204A] text-[22px] font-light leading-[28px] mb-4'>
					Order our catalogue for free
				</h1>
				<p className='w-[312px]  text-center text-sm font-light leading-[22px]'>
					Lorem ipsim dolor set amet lorem ipsim dolor set amet lorem ipsim dolor set amet{' '}
				</p>
				<Image src={orderbook} alt='orderbook' />
				<button className='bg-[#00204A] w-[155px] text-white px-4 py-2'>Order now</button>
			</div>
		</Container>
	)
}

export default Order
