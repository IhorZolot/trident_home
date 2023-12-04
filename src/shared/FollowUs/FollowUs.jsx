import React from 'react'
import Sprite from '../../../public/images/Sprite'

const FollowUs = () => {
	return (
		<ul className='flex gap-4'>
			<li>
				<Sprite name={'facebook'} />
			</li>
			<li>
				<Sprite name={'instagram'} />
			</li>
			<li>
				<Sprite name={'youtube'} />
			</li>
		</ul>
	)
}
export default FollowUs
