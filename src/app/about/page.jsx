import React from 'react'
import { AboutUs } from './components/AboutUs'
import { Faq } from './components/Faq'
import Order from '@/components/Order'
import Quality from './components/Quality'

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
