import React from 'react'
import { Order } from './components/Order'
import OrderCatalog from './components/OrderCatalog'
import ContactYou from '@/shared/ContactYou/ContactYou'

const order = () => {
	return (
		<div className=''>
			<OrderCatalog />

			<Order />
		</div>
	)
}
export default order
