import Link from 'next/link';
import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

const Button = ({ styleButton, nameButton, styleArrow, href }) => {
  return (
    <div className={styleButton}>
      <a href={href} >
      {nameButton}
    </a>
    <VscArrowRight className={styleArrow} />
    </div>
    
  );
};

export default Button

{/* <button className='hidden bg-mainBlue lg:flex lg:gap-3 lg:items-center text-white lg:px-12 lg:py-4'>
				<a href='/catalog'>Read more</a>
				<VscArrowRight className='text-white' />
			</button> */}