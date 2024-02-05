'use client'
import React, { useEffect, useState } from 'react'

import { FaCircleArrowUp } from 'react-icons/fa6'

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		const scrolled = document.documentElement.scrollTop
		const threshold = 300
		setIsVisible(scrolled > threshold)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={`fixed bottom-4 z-50 right-4 text-red-500 text-4xl lg:text-5xl cursor-pointer opacity-0 transition-opacity ${
				isVisible ? 'opacity-100' : ''
			}`}
			onClick={scrollToTop}
		>
			<FaCircleArrowUp />
		</div>
	)
}

export default ScrollToTopButton
