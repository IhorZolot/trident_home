'use client'
import React from 'react'
import Link from 'next/link'

import { Header } from '@/modules/header/components/Header'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/shared/Data/nav-links'

const MobileMenu = ({ close }) => {
	const activeLink = usePathname()

	return (
		<div className='bg-white'>
			<Header openModal />
			<ul className='flex flex-col gap-8 justify-center items-center pt-6 '>
				{navLinks.map(item => (
					<li
						onClick={close}
						className={`${activeLink === item.src ? ' border-b-2 border-b-yellow-500 ' : ' '} w-full text-center`}
						key={item.title}
					>
						<Link href={item.src} className={` hover:text-yellow-500 focus:outline-none`}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MobileMenu
