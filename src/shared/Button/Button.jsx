import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'

const Button = ({ styleButton, children, styleArrow, href }) => {
  return (
      <a href={href} className={styleButton}>
      {children}
      <VscArrowRight className= {styleArrow} />
    </a>
  );
};

export default Button
