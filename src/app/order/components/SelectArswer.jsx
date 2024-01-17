'use client'
import React, { useState } from 'react'

const SelectAnswer = ({ onSelect, register }) => {
	const [selectedAnswer, setSelectedAnswer] = useState('')

	const handleSelectChange = event => {
		const value = event.target.value
		setSelectedAnswer(value)
		onSelect(value)
	}

	return (
		<div>
			<label htmlFor='answer'>Select answer:</label>
			<select id='answer' value={selectedAnswer} onChange={handleSelectChange}>
				<option value=''>Select answer</option>
				<option value='option1'>Option 1</option>
				<option value='option2'>Option 2</option>
				<option value='option3'>Option 3</option>
			</select>
		</div>
	)
}
export default SelectAnswer
