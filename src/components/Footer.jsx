import FollowUs from '@/shared/FollowUs/FollowUs'
import React from 'react'
import { MdPhoneInTalk } from 'react-icons/md'
import { PiMapPinLight } from 'react-icons/pi'
import { LuMail } from 'react-icons/lu'

const Footer = () => {
	return (
		<div className='bg-[#00204A]  text-white py-8 px-6'>
			<hi className='block mb-8'>W Houses</hi>
			<div className='flex flex-col gap-2 mb-8 text-white text-[15px] not-italic font-light leading-[18px]'>
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
			<div className='mb-8'>
				<FollowUs />
			</div>
			<div className='flex gap-16 text-[rgba(255,255,255,0.65)] text-xs not-italic font-light leading-[15px]'>
				<span>© Trident 2023</span>
				<span>Privacy Policy</span>
			</div>
		</div>
	)
}
export default Footer
