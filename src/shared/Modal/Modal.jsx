'use client'
import React from 'react'

const Modal = ({ children, close }) => {
	const onBackdropClick = event => {
		if (event.target === event.currentTarget) {
			close()
		}
	}
	return (
		<div onClick={onBackdropClick} className=''>
			{children}
		</div>
	)
}

export default Modal
