import React from 'react'
import Image from 'next/image'

import aboutus013 from '../../../../public/images/aboutus/aboutus013.png'
import abouthome from '../../../../public/images/aboutus/abouthome.png'

export const AboutUs = () => {
	return (
		<section className='lg:flex lg:px-8 lg:justify-between lg:gap-8 lg:mb-12 lg:pt-[90px]'>
			<div className='mb-12 text-mainBlue lg:mb-0'>
				<h1 className='text-[26px] font-medium leading-[45px] mb-4 lg:text-[46px] lg:font-normal'>About us</h1>
				<p className='w-full text-[26px] font-light leading-[29.8px] mb-6 lg:w-[595px] lg:text-4xl lg:leading-[45px]'>
					Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
					temporary as well as permanent residence.
				</p>
				<Image src={aboutus013} alt='img' className='w-full mb-8 lg:hidden' />
				<div className='flex flex-col w-full gap-4 text-mainBlue text-sm font-light leading-[23px] lg:w-[595px] lg:text-base'>
					<p>
						An enterprise combining the joint expertise of a UK-based chartered architectural practice and an
						experienced Ukrainian manufacturer.
					</p>
					<p>
						Trident Modular Housing LTD : Trident Modular Housing is a bespoke garden room, modular building designer,
						and manufacturer.
					</p>
					<p>
						Our high-quality, energy-saving products are designed with the end user in mind and can be customized to
						meet any specific client`s requirements.
					</p>
					<p>
						Our main aim is to provide our customers with a fast, cost-effective service. We are able to achieve this
						with the help of the newest building technologies for manufacturing and assembly.
					</p>
				</div>
			</div>
			<Image src={abouthome} alt='House' width={556} height={698} className='hidden lg:block' />
		</section>
	)
}
