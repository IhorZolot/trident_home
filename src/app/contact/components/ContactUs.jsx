import React from 'react'

const ContactUs = () => {
	return (
		<div>
			<div className=''>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1493318822263!2d-73.98124852350924!3d40.75874017138659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2z0KDQvtC60YTQtdC70LvQtdGA0L7QstGB0LrQuNC5INGG0LXQvdGC0YA!5e0!3m2!1sru!2sua!4v1702217030167!5m2!1sru!2sua'
					width='375px'
					height='298px'
					style={{ border: '0' }}
					allowFullScreen=''
					loading='lazy'
				></iframe>
			</div>
			<div className='px-2 py-6'>
				<h1 className='pb-6 text-[#00204A] text-[26px] font-medium leading-[45px]'>Contact us</h1>
				<div className='flex flex-col gap-2 mb-6 text-[#00204A] text-sm font-normal leading-[22.486px]'>
					<span>Forpeople Studio</span>
					<span>1 Space Street</span>
					<span>New York, NY-90814</span>
				</div>
				<div className='flex flex-col gap-2 mb-6 text-[#00204A] text-sm font-normal leading-[22.486px]'>
					<span>Email: hello@forpeop</span>
					<span>Tel: +1-800-999-800</span>
				</div>
				<button className='bg-[#00204A] text-white py-3 px-8'>Get request</button>
			</div>
		</div>
	)
}

export default ContactUs
