'use client'
import { useState } from 'react'

import { SectionButton } from '@/shared/Button/SectionButton'
import Container from '@/shared/Container/Container'
import { interiorArr } from '@/shared/Data/InteriorImgArr/interior-img-data'
import SliderImage from '@/shared/SliderState/SliderState'

const Interior = () => {
	const [selectedStyle, setSelectedStyle] = useState('standard');

	const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };
	const filteredImages = interiorArr.filter(item => item.style === selectedStyle);

	return (
		<Container>
			<div className='text-[#00204A] pb-10 lg:pt-20'>
				<div className='lg:flex lg:justify-between'>
					<h1 className='text-[26px] font-medium leading-[45px] lg:mb-4'>Interior</h1>
					<p className='text-[18px] font-light leading-[45px] mb-4 lg:text-[23px]'>You can choose a design that you like</p>
				</div>
				<div className='flex gap-4 mb-6'>
					<SectionButton styleButton onClick={() => setSelectedStyle('standard')}>
						STANDARD
					</SectionButton>
					<SectionButton onClick={() => setSelectedStyle('medi')}>MEDITERRANEAN</SectionButton>
					<SectionButton onClick={() => setSelectedStyle('scan')}>
						SCANDINAVIAN
					</SectionButton>
				</div>
				<div className='lg:flex lg:flex-row-reverse gap-6'>
					<div className='lg:flex lg:justify-between gap-6 lg:w-1/2'>
						<h1 className='text-[23px] font-light leading-[45px] mb-6 uppercase lg:hidden'>Standard</h1>
						<SliderImage  images={filteredImages} selectedStyle={selectedStyle} handleStyleChange={handleStyleChange}/>
					</div>
					<div className='text-[#00204A] flex flex-col gap-4 text-sm font-light leading-[22.486px] lg:top-[350px] lg:text-base lg:w-1/2'>
						<h1 className='hidden lg:block lg:text-[23px] lg:font-light lg:leading-[45px] uppercase'>Standard</h1>
						<p className='w-full'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
						<p className='w-full'>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Interior
