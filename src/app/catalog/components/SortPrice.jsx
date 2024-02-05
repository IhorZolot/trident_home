import React from 'react'

export const SortPrice = () => {
	return (
		<form>
			<select className='hidden lg:block ml-auto mb-8'>
				<option value=''> Sort by price</option>
				<option value='2000'>$2000</option>
				<option value='3000'>$3000</option>
				<option value='4000'>$4000</option>
				<option value='5000'>$5000</option>
			</select>
		</form>
	)
}
