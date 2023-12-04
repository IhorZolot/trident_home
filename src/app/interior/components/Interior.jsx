import Image from 'next/image'
import React from 'react'
import image52 from '../../../../public/images/interiors/image52.png'
import image48 from '../../../../public/images/interiors/image48.png'
import image49 from '../../../../public/images/interiors/image49.png'
import image50 from '../../../../public/images/interiors/image50.png'

const Interior = () => {
	return (
		<div className='text-[#00204A] pt-4 pb-10'>
			<h1 className='px-2 text-[26px] font-medium leading-[45px]'>Interior</h1>
			<span className=' text-[23px] font-light leading-[45px] px-2'>You can choose design that you like</span>
			<div className='flex gap-4 px-2 mb-6'>
				<button className='bg-[#F4D059] px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>
					STANDARD
				</button>
				<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>MEDITERRANEAN</button>
			</div>
			<h1 className='text-[23px] font-light leading-[45px] mb-6 px-2 uppercase'>Spandard</h1>
			<Image src={image52} alt='img' className='mb-4' />
			<div className='flex gap-2 px-2 mb-8'>
				<Image src={image48} alt='img' />
				<Image src={image49} alt='img' />
				<Image src={image50} alt='img' />
			</div>
			<div className='flex flex-col gap-4 px-2 text-sm font-light leading-[22.486px]'>
				<p className='w-[354px]'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
				<p className='w-[354px]'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but also the leap into electronic
					typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</div>
	)
}

export default Interior
