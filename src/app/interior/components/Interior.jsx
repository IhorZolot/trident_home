import Image from 'next/image'
import React from 'react'
import image52 from '../../../../public/images/interiors/image52.png'
import image48 from '../../../../public/images/interiors/image48.png'
import image49 from '../../../../public/images/interiors/image49.png'
import image50 from '../../../../public/images/interiors/image50.png'
import imageLg44 from '../../../../public/images/interiors/imageLg44.png'
import imageLg45 from '../../../../public/images/interiors/imageLg45.png'
import imageLg46 from '../../../../public/images/interiors/imageLg46.png'
import imageLg47 from '../../../../public/images/interiors/imageLg47.png'
import Container from '@/shared/Container/Container'

const Interior = () => {
	return (
		<Container>
			<div className='text-[#00204A] pb-10'>
				<div className='lg:flex justify-between'>
					<h1 className='text-[26px] font-medium leading-[45px] lg:mb-4'>Interior</h1>
					<p className='text-[23px] font-light leading-[45px mb-4'>You can choose design that you like</p>
				</div>
				<div className='flex gap-4 mb-6'>
					<button className='bg-[#F4D059] px-6 py-2 border border-solid border-r-[16px] border-[#F4D059]'>
						STANDARD
					</button>
					<button className='px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>MEDITERRANEAN</button>
					<button className='hidden lg:block px-6 py-2 border border-solid border-r-8 border-[#F4D059]'>
						SCANDINAVIAN
					</button>
				</div>
				<div className='lg:flex justify-between'>
					<h1 className='text-[23px] font-light leading-[45px] mb-6 uppercase'>Spandard</h1>
					<div className='lg:hidden'>
						<Image src={image52} alt='img' className='mb-4' />
						<div className='flex gap-4 mb-8'>
							<Image src={image48} alt='img' />
							<Image src={image49} alt='img' />
							<Image src={image50} alt='img' />
						</div>
					</div>
					<div className='hidden lg:block lg:pt-6'>
						<Image src={imageLg44} alt='img' className='mb-4' />
						<div className='flex gap-3 mb-8'>
							<Image src={imageLg45} alt='img' />
							<Image src={imageLg46} alt='img' />
							<Image src={imageLg47} alt='img' />
						</div>
					</div>
				</div>
				<div className='text-[#00204A] flex flex-col gap-4 text-sm font-light leading-[22.486px] lg:absolute lg:top-[350px] lg:text-base  '>
					<p className='w-[354px] lg:w-[483.738px] '>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<p className='w-[354px] lg:w-[483.738px] '>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Interior
