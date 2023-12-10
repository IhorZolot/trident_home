import React from 'react'
import { Order } from './components/Order'
import OrderCatalog from './components/OrderCatalog'
import ContactYou from '@/shared/ContactYou/ContactYou'

const order = () => {
	return (
		<div>
			<OrderCatalog />
			<Order />
		</div>
	)
}
export default order
