import React from 'react'
import GardenRoom from './components/GardenRoom'
import GardenInteriors from './components/GardenInteriors'
import TechnicalDetails from './components/TechnicalDetails'
import Documents from './components/Documents'
import Floorplans from './components/Floorplans'
import Quality from '../about/components/Quality'
import Order from '@/components/Order'
import StandsrtOptions from './components/StandsrtOptions'
import Recomended from './components/Recomended'

const garden = () => {
	return (
		<div>
			<GardenRoom />
			<GardenInteriors />
			<TechnicalDetails />
			<Documents />
			<Floorplans />
			<Quality />
			<Order />
			<StandsrtOptions />
			<Recomended />
		</div>
	)
}

export default garden
