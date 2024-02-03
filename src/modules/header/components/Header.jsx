'use client'
import React from 'react'

import { TfiAlignJustify } from 'react-icons/tfi'
import { MdClose } from 'react-icons/md'

import Modal from '@/shared/Modal/Modal'
import { useModal } from '@/hooks/useModal'
import NavBar from '@/shared/NavBar/NavBar'
import MobileMenu from '../../mobileMenu/MobileMenu'
import Button from '@/shared/Button/Button'
import Logo from '@/shared/Logo/Logo'

export const Header = () => {
	const [isMobileMenuOpen, openMenu, closeMenu] = useModal()

	return (
		<>
			<div className='flex py-4 px-8 space-y-1 w-full  justify-between relative'>
				<a
					className='hidden lg:flex lg:flex-col lg:bg-yellow-400 lg:w-[125px] lg:h-[125px] lg:text-[13px] uppercase lg:absolute lg:right-[36px] lg:top-1 lg:justify-center lg:z-20 lg:px-4 lg:hover:bg-blue-800 lg:hover:text-white transition-transform duration-900'
					href='/order'
				>
					<span className='font-bold'>Order</span>
					Catalogue
				</a>
				<Logo />
				<NavBar />
				<button onClick={isMobileMenuOpen ? closeMenu : openMenu}>
					{isMobileMenuOpen ? (
						<MdClose className='hover:text-yellow-500 lg:hidden relative z-50' />
					) : (
						<TfiAlignJustify className='hover:text-yellow-500 lg:hidden ' />
					)}
				</button>
			</div>
			<Button
				styleButton='bg-yellow-400 px-4 py-2 flex gap-6 justify-center items-center uppercase lg:hidden'
				hoverButton
				href='/order'
			>
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
