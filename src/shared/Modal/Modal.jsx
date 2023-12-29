'use client'
import React, { useEffect } from 'react'

const Modal = ({ children, close }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			close()
		}
	}
	useEffect(() => {
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				close()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [close])

	return (
		<div
			onClick={onBackdropClick}
			className='fixed inset-0 bg-[rgba(0,0,0,0.50)] z-1 backdrop-blur-md w-full h-full justify-center items-center'
		>
			{children}
		</div>
	)
}

export default Modal
