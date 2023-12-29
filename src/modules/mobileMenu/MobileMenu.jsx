'use client'
import navLinks from '@/shared/Data/nav-links'
import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
	return (
		<div className='mt-[110px] '>
			<ul className='flex flex-col gap-8 justify-center items-center '>
				{navLinks.map(item => (
					<li key={item.title}>
						<Link href={item.src} className='hover:text-blue-700 focus:outline-none focus:underline'>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MobileMenu
