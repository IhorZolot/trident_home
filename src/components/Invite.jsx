import Image from 'next/image'
import React from 'react'
import home1 from '../../public/images/invite/home1.png'

const Invite = () => {
	return (
		<>
			<Image src={home1} alt='Home' />
			<div className='bg-[#00204A] py-4 px-2'>
				<a href='#' className='block w-[330px] text-white'>
					A place that is more than an office - a place where you can create work-life balance
				</a>
			</div>
		</>
	)
}
export default Invite
