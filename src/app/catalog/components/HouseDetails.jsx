import Image from 'next/image';
import React from 'react';

const HouseDetails = ({ content, close }) => {
  const { img, title, desc } = content;

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 mx-auto my-auto bg-white  px-2 py-2' onClick={close}>
      <Image src={img} alt='Image' />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default HouseDetails;
