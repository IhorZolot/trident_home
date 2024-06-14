import React from 'react'
import Order from '@components/Order'
import { AboutUs } from './components/AboutUs'
import Quality from './components/Quality'
import { Faq } from './components/Faq'

const about = () => {
	return (
		<>
			<AboutUs />
			<Quality />
			<Faq />
			<Order />
		</>
	)
}

export default about
