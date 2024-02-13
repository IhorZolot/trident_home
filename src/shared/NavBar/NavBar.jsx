'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '../Data/nav-links'

const NavBar = ({ classes }) => {
	const activeLink = usePathname()

	return (
		<ul className={`${classes ? classes : ' '} hidden lg:flex gap-8`}>
			{navLinks.map(item => (
				<li key={item.title}>
					<Link
						href={item.src}
						className={`${
							activeLink === item.src ? ' border-b-2 border-b-yellow-500 ' : ' '
						} hover:text-yellow-500 focus:outline-none`}
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavBar
