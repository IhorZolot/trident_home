import Image from 'next/image'
import React from 'react'

const Section1 = () => {
	return (
		<>
			<div>
				<a href='#'>Order trident Catalogue</a>
			</div>
			<Image src='/Home.png' alt='Home' width={375} height={212} />
			<div>
				<a href='#'>A place that is more than an office - a place where you can create work-life balance</a>
			</div>
		</>
	)
}

export default Section1
