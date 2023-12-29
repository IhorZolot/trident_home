'use client'
import NavBar from '@/shared/NavBar/NavBar'
import React from 'react'
import { useModal } from '@/hooks/useModal'

import { TfiAlignJustify } from 'react-icons/tfi'
import { VscArrowRight } from 'react-icons/vsc'
import { GiSydneyOperaHouse } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import Modal from '@/shared/Modal/Modal'
import MobileMenu from '../mobileMenu/MobileMenu'

export const Header = () => {
	const [isMobileMenuOpen, openMenu, closeMenu] = useModal()

	return (
		<>
			<div className='flex py-4 px-8 space-y-1 w-full justify-between relative'>
				<div className='hidden lg:flex lg:bg-yellow-400 lg:w-[125px] lg:h-[125px] lg:text-[13px] uppercase lg:absolute lg:right-[36px] justify-center items-center '>
					<a href='/order' className='w-[78px]'>
						<span className='font-bold'>Order</span> Catalogue
					</a>
				</div>
				<a
					href='/'
					className='flex gap-3 items-center text-xl hover:text-blue-700 focus:outline-none focus:border-blue-300'
				>
					<GiSydneyOperaHouse /> Houses
				</a>
				<NavBar />
				<button onClick={isMobileMenuOpen ? closeMenu : openMenu}>
					{isMobileMenuOpen ? <MdClose /> : <TfiAlignJustify className='lg:hidden' />}
				</button>
			</div>
			<div className='bg-yellow-400 px-4 py-2 flex gap-6 justify-center items-center uppercase lg:hidden'>
				<a href='/order'>Order trident Catalogue</a>
				<VscArrowRight />
			</div>
			{isMobileMenuOpen && (
				<Modal>
					<MobileMenu />
				</Modal>
			)}
		</>
	)
}
