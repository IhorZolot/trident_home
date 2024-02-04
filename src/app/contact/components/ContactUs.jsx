import React from 'react'

import Button from '@/shared/Button/Button'

const ContactUs = () => {
	return (
		<div className='lg:flex justify-around relative'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1493318822263!2d-73.98124852350924!3d40.75874017138659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2z0KDQvtC60YTQtdC70LvQtdGA0L7QstGB0LrQuNC5INGG0LXQvdGC0YA!5e0!3m2!1sru!2sua!4v1702217030167!5m2!1sru!2sua'
				style={{ border: '0' }}
				allowFullScreen=''
				loading='lazy'
				className='w-full h-[300px] lg:h-[660px]'
			/>
			<div className='px-2 w-full flex bg-white  justify-center flex-col py-6 lg:border-neutral-100 lg:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-solid lg:pb-[50px] lg:absolute lg:right-[36px] lg:top-[100px] z-1 lg:px-16 lg:w-1/3'>
				<h1 className='pb-6 text-mainBlue text-[26px] font-medium leading-[45px]'>Contact us</h1>
				<div className='flex flex-col gap-2 mb-6 text-mainBlue text-sm font-normal leading-[22px] '>
					<span>Forpeople Studio</span>
					<span>1 Space Street</span>
					<span>New York, NY-90814</span>
				</div>
				<div className='flex flex-col gap-2 mb-6 text-mainBlue text-sm font-normal leading-[22.486px]'>
					<span>Email: hello@forpeop</span>
					<span>Tel: +1-800-999-800</span>
				</div>
				<Button
					styleButton='bg-mainBlue text-white py-3 px-4 flex items-center gap-3 max-w-[155px] lg:absolute bottom-0 left-0'
					styleArrow='text-white'
					href='tel:+380670670000'
				>
					Get request
				</Button>
			</div>
		</div>
	)
}

export default ContactUs
