import Image from 'next/image'
import React from 'react'
import sauna3 from './image/sauna3.png'

const Floorplans = () => {
	return (
		<div className='mb-8'>
			<h1 className='px-2 mb-4text-[#00204A] text-[26px] font-light leading-[45px]'>Floorplans</h1>
			<div className='px-2 grid grid-cols-3 gap-2 w-[375px]'>
				<Image src={sauna3} alt='Plan' />
				<Image src={sauna3} alt='Plan' />
				<Image src={sauna3} alt='Plan' />
				<Image src={sauna3} alt='Plan' />
				<Image src={sauna3} alt='Plan' />
				<Image src={sauna3} alt='Plan' />
			</div>
		</div>
	)
}

export default Floorplans
