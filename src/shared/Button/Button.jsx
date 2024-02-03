import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

const Button = ({ styleButton, children, href, hoverButton }) => {
	return (
		<a
			href={href}
			className={`${styleButton} ${
				hoverButton
					? 'hover:bg-blue-800 hover:text-white transition-transform duration-900'
					: 'hover:bg-yellow-500 hover:text-black transition-transform duration-900'
			}`}
		>
			{children}
			<VscArrowRight />
		</a>
	)
}

export default Button
