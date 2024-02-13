import React from 'react'
import { sortByPrice } from '@/shared/Data/InputData/select-data'

export const SortPrice = ({ onChange, styleButton }) => {
	return (
		<form>
			<select className={styleButton} onChange={onChange}>
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
