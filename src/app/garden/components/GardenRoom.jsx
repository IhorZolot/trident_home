import Image from 'next/image'
import React from 'react'
import home2 from '../../../../public/images/designs/home2.png'

const GardenRoom = () => {
	return (
		<div>
			<h1>Garden Room</h1>
			<Image src={home2} alt='home' />
		</div>
	)
}

export default GardenRoom
