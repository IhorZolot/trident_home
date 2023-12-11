import React from 'react'
import navLinksHouse from '../../../shared/Data/nav-links-house'

const FooterLinkHouse = () => {
	return (
		<ul className='hidden lg:flex flex-col gap-2'>
			{navLinksHouse.map(item => (
				<li key={item}>
					<a href='#' className='text-white text-[15px] font-light leading-[18px]'>
						{item}
					</a>
				</li>
			))}
		</ul>
	)
}

export default FooterLinkHouse
