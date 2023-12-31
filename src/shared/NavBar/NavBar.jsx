'use client'
import React from 'react'
import navLinks from '../Data/nav-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = ({ classes }) => {
	const activeLink = usePathname()
	console.log(activeLink)
	return (
		<ul className={`${classes ? classes : ' '} hidden lg:flex gap-8`}>
			{navLinks.map(item => (
				<li key={item.title}>
					<Link
						href={item.src}
						className={` ${
							activeLink === item.src ? ' border-b-2 border-b-yellow ' : ' '
						} hover:text-yellow-700 focus:outline-none`}
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavBar
