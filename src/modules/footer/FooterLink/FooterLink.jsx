import React from 'react'
import navLinks from '../../../shared/Data/nav-links'

const FooterLink = () => {
	return (
		<ul className='hidden lg:flex flex-col gap-2'>
			{navLinks.map(item => (
				<li key={item}>
					<a href='#' className='text-white text-[15px] font-light leading-[18px]'>
						{item}
					</a>
				</li>
			))}
		</ul>
	)
}

export default FooterLink
