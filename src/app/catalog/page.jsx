import React from 'react'
import HouseCatalog from './components/HouseCatalog'
import FilterHouse from '../filter/components/FilterHouse'

const page = () => {
	return (
		<div className='lg:grid gap-4 grid-cols-[1.7fr_3fr] lg:px-8 lg:pt-12 '>
			<div className='hidden lg:block pt-[80px]'>
				<FilterHouse />
			</div>
			<HouseCatalog />
		</div>
	)
}

export default page
