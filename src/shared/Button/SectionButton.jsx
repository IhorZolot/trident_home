import React from 'react'

export const SectionButton = ({children, styleButton, href, type} ) => {
  return (
    <button className={styleButton ? 'bg-yellow-400 px-4 py-3 uppercase': 'px-4 py-3 border border-solid border-r-8 border-[#F4D059] uppercase' }>
      {children}
    </button>
  )
}
