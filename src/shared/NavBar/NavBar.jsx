import React from 'react'
import navLinks from '../Data/nav-links'

const NavBar = () => {
	return (
		<ul className='hidden lg:flex gap-8'>
			{navLinks.map(item => (
				<li key={item}>
					<a href='#'>{item}</a>
				</li>
			))}
		</ul>
	)
}

export default NavBar
