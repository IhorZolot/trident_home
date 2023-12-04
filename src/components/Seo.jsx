import React from 'react'
import Image from 'next/image'
import image15 from '../../public/images/order/image15.png'
import Container from './Container'

const Seo = () => {
	return (
		<Container>
			<div className='mb-12'>
				<Image src={image15} alt='photo' />
			</div>
		</Container>
	)
}

export default Seo
