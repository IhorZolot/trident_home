import React from 'react'
import ContactUs from './components/ContactUs'
import ContactForm from './components/ContactForm'
import ContactYou from '@/shared/ContactYou/ContactYou'

const contact = () => {
	return (
		<div>
			<ContactUs />
			<ContactYou />
			<ContactForm />
		</div>
	)
}

export default contact
