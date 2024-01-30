'use client'
import React, { useEffect } from 'react'

const Modal = ({ children, close, styleModal }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			close()
		}
	}
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				close()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = 'visible'
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [close])

	return (
		<div
			onClick={onBackdropClick}
			className='fixed inset-0 bg-[rgba(0,0,0,0.50)] z-20 backdrop-blur-md w-full h-full justify-center items-center'
		>
			<div>{children}</div>
		</div>
	)
}

export default Modal
