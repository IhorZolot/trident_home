import React from 'react'
import Image from 'next/image'
import Container from '@/shared/Container/Container'
import { stylesArr } from '@/shared/Data/styles-home-data'
import { SectionButton } from '@/shared/Button/SectionButton'

const StylesHome = () => {
	return (
		<Container>
			<div className='mb-12 lg:pt-12'>
				<div className='lg:flex gap-8'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Styles</hi>
					<div className='flex gap-2 mb-8'>
						<SectionButton>Choose styles</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{stylesArr.map(item => (
						<li key={item.id} className='relative overflow-hidden  '>
							<Image
								src={item.img}
								alt='img'
								width='100%'
								layout='intrinsic'
								className='w-[100%] aspect-square object-cover   '
							/>
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}
export default StylesHome
