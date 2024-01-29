import React from 'react'
import GardenRoom from './components/GardenRoom'
import GardenInteriors from './components/GardenInteriors'
import TechnicalDetails from './components/TechnicalDetails'
import Documents from './components/Documents'
import Floorplans from './components/Floorplans'
import Quality from '../about/components/Quality'
import Order from '@/components/Order'
import Recomended from './components/Recomended'
import StandartOptions from './components/StandartOptions'
import GardenPrice from './components/GardenPrice'
import { VideoGerden } from './components/VideoGerden'

export const MobilePage = () => {
	return (
		<div className='block lg:hidden'>
			<GardenRoom />
      <GardenPrice />
			<GardenInteriors />
			<VideoGerden />
			<div className='flex flex-col'>
				<TechnicalDetails />
				<Documents />
				<Floorplans />
			</div>
			<Quality />
			<Order />
			<StandartOptions />
			<Recomended />
		</div>
	)
}
