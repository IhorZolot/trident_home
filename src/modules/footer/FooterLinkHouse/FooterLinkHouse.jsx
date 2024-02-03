import React from 'react'
import Link from 'next/link'

import { navLinksHouse } from '@/shared/Data/nav-links'

const FooterLinkHouse = () => {
	return (
		<ul className='hidden lg:flex flex-col gap-4'>
			{navLinksHouse.map(item => (
				<li key={item}>
					<Link href='/' className='text-white text-[15px] font-light leading-[18px] hover:text-yellow-500'>
						{item}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default FooterLinkHouse
