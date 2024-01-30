import FollowUs from '@/shared/FollowUs/FollowUs'
import React from 'react'
import { MdPhoneInTalk } from 'react-icons/md'
import { PiMapPinLight } from 'react-icons/pi'
import { LuMail } from 'react-icons/lu'
import FooterLink from './FooterLink/FooterLink'
import FooterLinkHouse from './FooterLinkHouse/FooterLinkHouse'
import Logo from '@/shared/Logo/Logo'

const Footer = () => {
	// py-8
	return (
		<div className='bg-[#00204A]  text-white py-6 px-6'>
			<div className='lg:grid grid-cols-4 w-full gap-12 mb-12'>
				<div className='flex flex-col gap-3 mb-8 text-white text-[15px] not-italic font-light leading-[18px]'>
					<div className='mb-8'><Logo/></div>
					<span className='flex gap-2 items-center'>
						<MdPhoneInTalk />
						111A T. Shevchenko
					</span>
					<span className='flex gap-2 items-center'>
						<PiMapPinLight />
						0054-6272444
					</span>
					<span className='flex gap-2 items-center'>
						<LuMail />
						Info@mail.com
					</span>
				</div>
				<FooterLink />
				<div className='hidden lg:block'>
					<FooterLinkHouse />
				</div>
				<div className='hidden lg:block'>Style House</div>
			</div>
			<div className='lg:hidden'>
				<div className='mb-8'>
					<FollowUs />
				</div>
				<div className='flex gap-12 '>
					<span className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px]'>© Trident 2023</span>
					<span className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px]'>Privacy Policy</span>
				</div>
			</div>
			<div className='hidden lg:flex justify-between'>
				<div className='flex gap-12'>
					<span className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px]'>© Trident 2023</span>
					<span className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px]'>Privacy Policy</span>
				</div>
				<div>
					<FollowUs />
				</div>
			</div>
		</div>
	)
}
export default Footer
