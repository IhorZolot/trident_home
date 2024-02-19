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

export const DesktopPage = () => {
  return (
    <div className='hidden lg:block'>
      <GardenRoom />
    <div className='flex  justify-between gap-12'>
      <section className='grid'>
      <GardenPrice />
      <GardenInteriors />
      </section>
      <section className='grid '>
      <VideoGerden />
      <Documents />
      </section>
    </div>
    <div className='grid grid-cols-2'>
      <TechnicalDetails />
      <Floorplans/>
    </div>
    <Quality />
    <Order />
    <StandartOptions />
    <Recomended />
    </div>
  )
}
