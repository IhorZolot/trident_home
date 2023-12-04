import Image from 'next/image'
import React from 'react'
import home1 from '../../public/images/catalog/home1.png'

const Catalog = () => {
	return (
		<>
			<div className='bg-yellow-400 px-4 py-2 flex justify-center '>
				<a href='#' className=''>
					Order trident Catalogue
				</a>
			</div>
			<Image src={home1} alt='Home' />
			<div className='bg-blue-900 py-4 py-4 px-2'>
				<a href='#' className='block w-[330px] text-white'>
					A place that is more than an office - a place where you can create work-life balance
				</a>
			</div>
		</>
	)
}
export default Catalog
