import Image from 'next/image'
import React, { useState } from 'react'


const SliderImage = ({images, custom }) => {
  const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0].img : null)

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
	}
  return (
						<div className={custom}>
							<Image src={selectedImage} alt='Selected Image' className='mb-4 w-full' />
							<ul className='flex gap-4 mb-8'>
								{images.map((item, id) => (
									<li key={id}>
										<button className={`w-full ${selectedImage === item.img ? 'border-yellow-400 border-4' : ''}`} onClick={() => handleImageClick(item.img)}>
											<Image src={item.img} alt='img' />
										</button>
									</li>
								))}
							</ul>
						</div>
  )
}

export default SliderImage