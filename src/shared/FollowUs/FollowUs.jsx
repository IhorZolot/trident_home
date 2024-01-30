import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const FollowUs = () => {
	return (
		<ul className='flex gap-4 mb-12 lg:mb-2'>
			<li>
				<Link  className='hover:text-yellow-700' href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
    <FaFacebookF />
				</Link>
			</li>
			<li>
				<Link className='hover:text-yellow-700' href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
				<FaInstagram />
				</Link>
			</li>
			<li>
				<Link className='hover:text-yellow-700' href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer' aria-label='Youtube'>
				<FaYoutube />
					</Link>
			</li>
		</ul>
	)
}
export default FollowUs
