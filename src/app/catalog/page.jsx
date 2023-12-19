import React from 'react'
import HouseCatalog from './components/HouseCatalog'
import FilterHouse from '../filter/components/FilterHouse'

const page = () => {
	return (
		<div className='lg:grid gap-4 grid-cols-[1fr_3fr] '>
			<div className='hidden lg:block'>
				<FilterHouse />
			</div>

			<HouseCatalog />
		</div>
	)
}

export default page
