import React from 'react'
import navLinks from '../Data/nav-links'
import Link from 'next/link'

const NavBar = ({ classes }) => {
	return (
		<ul className={`${classes ? classes : ' '} hidden lg:flex gap-8`}>
			{navLinks.map(item => (
				<li key={item.title}>
					<Link href={item.src} className='hover:text-blue-700 focus:outline-none'>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default NavBar
