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
							<ul className='flex grid-col-3 gap-6 mb-8 px-2'>
								{images.map((item, id) => (
									<li key={id} className='flex-grow'>
										<button className={`w-full ${selectedImage === item.img ? 'border-yellow-400 border-4' : ''}`} onClick={() => handleImageClick(item.img)}>
											<Image src={item.img} alt='img'/>
										</button>
									</li>
								))}
							</ul>
						</div>
  )
}

export default SliderImage