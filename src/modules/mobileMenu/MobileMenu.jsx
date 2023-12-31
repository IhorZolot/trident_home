'use client'
import navLinks from '@/shared/Data/nav-links'
import Link from 'next/link'
import React from 'react'
import { Header } from '../header/Header'
import { usePathname } from 'next/navigation'

const MobileMenu = () => {
	const activeLink = usePathname()
	return (
		<div className=' '>
			<ul className='flex flex-col gap-8 justify-center items-center '>
				{navLinks.map(item => (
					<li
						className={` ${activeLink === item.src ? ' border-b-2 border-b-yellow-500 ' : ' '} w-full text-center`}
						key={item.title}
					>
						<Link href={item.src} className={`  hover:text-yellow-700 focus:outline-none`}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MobileMenu
