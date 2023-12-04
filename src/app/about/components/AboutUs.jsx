import Image from 'next/image'
import React from 'react'
import aboutus013 from '../../../../public/images/aboutus/aboutus013.png'
import Container from '@/components/Container'

export const AboutUs = () => {
	return (
		<Container>
			<div className='mb-12 text-[#00204A]'>
				<h1 className='text-[26px] font-medium leading-[45px]'>About us</h1>
				<p className='w-[357px] text-[26px] font-light leading-[29.8px] mb-4'>
					Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
					temporary as well as permanent residence.
				</p>
				<Image src={aboutus013} alt='img' className='mb-4' />
				<div className='flex flex-col w-[357px] gap-4 text-[#00204A] text-sm font-light leading-[23px]'>
					<p className=''>
						An enterprise combining the joint expertise of a UK-based chartered architectural practice and an
						experienced Ukrainian manufacturer.
					</p>
					<p>
						Trident Modular Housing LTD : Trident Modular Housing is a bespoke garden room, modular building designer,
						and manufacturer.
					</p>
					<p>
						Our high-quality, energy-saving products are designed with the end user in mind and can be customized to
						meet any specific client’s requirements.
					</p>
					<p>
						Our main aim is to provide our customers with a fast, cost-effective service. We are able to achieve this
						with the help of the newest building technologies for manufacturing and assembly.
					</p>
				</div>
			</div>
		</Container>
	)
}
