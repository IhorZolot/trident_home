import React from 'react'

export const SortItemData = ({ onChange, styleButton, item, options }) => {
	return (
		<form>
			<select className={styleButton} onChange={onChange}>
				<option value=''>{item}</option>
				{options.map(option => (
					<option key={option.id} value={option.value}>
						{`${option.value}`}
					</option>
				))}
			</select>
		</form>
	)
}
