import React from 'react'

export const SectionButton = ({ children, styleButton, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={
				styleButton
					? 'bg-yellow-400 px-4 py-3 uppercase hover:bg-yellow-900 hover:text-white transition-transform duration-900transition-delay-500'
					: 'px-4 py-3 border border-solid border-r-8 border-mainYellow uppercase hover:border-yellow-700 hover: hover:bg-yellow-700  hover:text-white transition-transform duration-900transition-delay-500'
			}
		>
			{children}
		</button>
	)
}
