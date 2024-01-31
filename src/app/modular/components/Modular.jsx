import React from 'react'
import Image from 'next/image'
import Container from '@/shared/Container/Container'
import { SectionButton } from '@/shared/Button/SectionButton'
import { houseArr } from '@/shared/Data/StylesHouseArray/house-array'

const Modular = () => {
	return (
		<Container>
			<div className='mb-12 lg:pt-12'>
				<div className='lg:flex gap-8'>
					<hi className='text-[#00204A] text-[26px] block font-medium leading-[45px] mb-6'>Modular</hi>
					<div className='flex gap-2 mb-8'>
						<SectionButton>Modular houses</SectionButton>
					</div>
				</div>
				<ul className='grid gap-6 lg:grid-cols-3'>
					{houseArr.map(item => (
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

export default Modular
