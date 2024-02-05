import React from 'react'
import { sortByPrice } from '@/shared/Data/InputData/select-data'

export const SortPrice = ({ onChange }) => {
	return (
		<form>
			<select className='hidden lg:block ml-auto mb-8' onChange={onChange}>
				<option value=''>Sort by price</option>
				{sortByPrice.map(option => (
					<option key={option.id} value={option.value}>
						{`${option.value}`}
					</option>
				))}
			</select>
		</form>
	)
}
