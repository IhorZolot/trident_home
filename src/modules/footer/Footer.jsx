'use client'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

import { useModal } from '@/hooks/useModal'
import { MdPhoneInTalk } from 'react-icons/md'
import { PiMapPinLight } from 'react-icons/pi'
import { LuMail } from 'react-icons/lu'
import { privacyPolicy } from '@/shared/Data/polisi-data'
import FollowUs from '@/shared/FollowUs/FollowUs'
import FooterLink from './FooterLink/FooterLink'
import FooterLinkHouse from './FooterLinkHouse/FooterLinkHouse'
import Logo from '@/shared/Logo/Logo'
import Modal from '@/shared/Modal/Modal'
import FooterStyleHouse from './FooterStyleHouse/FooterStyleHouse'

const Footer = () => {
	const [isPrivacyOpen, openPrivacy, closePrivacy] = useModal()
	return (
		<div className='bg-mainBlue  text-white py-6 px-6'>
			<div className='lg:grid grid-cols-4 w-full gap-12 mb-12'>
				<div className='flex flex-col gap-3 mb-8 text-[15px] not-italic font-light leading-[18px]'>
					<div className='mb-8'>
						<Logo />
					</div>
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
				<div className='hidden lg:block'>
					<FooterStyleHouse />
				</div>
			</div>
			<div className='lg:flex justify-between lg:flex-row-reverse'>
				<FollowUs className='mb-8' />
				<div className='flex gap-12 lg:items-center'>
					<span className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px] hover:text-yellow-500'>
						© Trident 2023
					</span>
					<a
						onClick={openPrivacy}
						className='text-[rgba(255,255,255,0.65)] text-xs font-light leading-[15px] hover:text-yellow-500'
					>
						Privacy Policy
					</a>
				</div>
			</div>
			{isPrivacyOpen && (
				<Modal close={closePrivacy}>
					<div className='w-[60%] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mx-auto my-auto border rounded-lg p-6'>
						<IoCloseSharp onClick={closePrivacy} className='absolute right-4 top-4 cursor-pointer' />
						<h1 className='mb-4 text-lg text'>Privacy Policy</h1>
						{privacyPolicy}
					</div>
				</Modal>
			)}
		</div>
	)
}
export default Footer
