import Image from 'next/image'
import React, { useState } from 'react'


const SliderImage = ({images, custom }) => {
  const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0].img : null)

	const handleImageClick = imageSrc => {
		setSelectedImage(imageSrc)
	}
	const displayedImages = images.slice(0, 3);
  return (
						<div className={custom}>
							<Image 
							 src={selectedImage}
							 alt='Selected Image'
							 layout='intrinsic'
							 className='mb-4 w-full aspect-square object-cover  max-h-[350px]' />
							<ul className='flex grid-col-3 gap-6 mb-8 px-2'>
								{displayedImages.map((item, id) => (
									<li key={id} className='flex-grow'>
										<button className={`w-full ${selectedImage === item.img ? 'border-yellow-400 border-4' : ''}`} onClick={() => handleImageClick(item.img)}>
											<Image src={item.img} alt='img' 
											 layout='intrinsic'
											 className='aspect-square object-cover max-h-[100px] lg:max-h-[120px]'/>
										</button>
									</li>
								))}
							</ul>
						</div>
  )
}

export default SliderImage