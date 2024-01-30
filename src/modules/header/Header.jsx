'use client'
import NavBar from '@/shared/NavBar/NavBar'
import React from 'react'
import { useModal } from '@/hooks/useModal'

import { TfiAlignJustify } from 'react-icons/tfi'
import { MdClose } from 'react-icons/md'
import Modal from '@/shared/Modal/Modal'
import MobileMenu from '../mobileMenu/MobileMenu'
import Button from '@/shared/Button/Button'
import Logo from '@/shared/Logo/Logo'

export const Header = () => {
	const [isMobileMenuOpen, openMenu, closeMenu] = useModal()

	return (
		<>
			<div className='flex py-4 px-8 space-y-1 w-full  justify-between relative'>
				<div className='hidden lg:flex lg:bg-yellow-400 lg:w-[125px] lg:h-[125px] lg:text-[13px] uppercase lg:absolute lg:right-[36px] lg:justify-center lg:items-center lg:z-20 lg:hover:text-yellow-700 '>
					<a href='/order' className='w-[78px]'>
						<span className='font-bold'>Order</span> Catalogue
					</a>
				</div>
				<Logo/>
				<NavBar />
				<button onClick={isMobileMenuOpen ? closeMenu : openMenu}>
					{isMobileMenuOpen ? <MdClose /> : <TfiAlignJustify className='hover:text-yellow-700 lg:hidden' />}
				</button>
			</div>
			<Button styleButton='bg-yellow-400 px-4 py-2 flex gap-6 justify-center items-center uppercase hover:text-yellow-700 lg:hidden' href='/order'>
				Order trident Catalogue
			</Button>
			{isMobileMenuOpen && (
				<Modal close={closeMenu}>
					<MobileMenu close={closeMenu} />
				</Modal>
			)}
		</>
	)
}
