import React from 'react'
import { GiSydneyOperaHouse } from 'react-icons/gi'

const Logo = ({styleLogo}) => {
	return (
		<a
			href='/'
			className='flex gap-3 items-center text-l hover:text-yellow-500 focus:outline-none focus:border-yellow-300 uppercase'
		>
			<GiSydneyOperaHouse style={{ fontSize: '2em' }}  className={styleLogo}/> Houses
		</a>
	)
}

export default Logo
