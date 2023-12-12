import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'
import home3 from '../../../../public/images/designs/home3.png'

const Recomended = () => {
	return (
		<div className='px-2 mb-14'>
			<h1 className='text-[#00204A] text-[26px] font-light leading-[45px] mb-6 lg:text-[46px] text-center'>
				You recently viewed
			</h1>
			<ul className='flex flex-col justify-center lg:flex-row gap-12'>
				<li>
					<Image src={home2} alt='Home' />
					<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Room</h2>
					<p className='mb-8'>A room where you can work, study, and design</p>
				</li>
				<li>
					<Image src={home3} alt='Home' />
					<h2 className='text-[#00204A] text-xl not-italic font-light leading-[44px]'>Garden Room</h2>
					<p className='mb-8'>A room where you can work, study, and design</p>
				</li>
			</ul>
		</div>
	)
}

export default Recomended
