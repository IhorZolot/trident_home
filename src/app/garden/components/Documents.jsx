import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Documents = () => {
	return (
		<div className='bg-[#00204A] pt-4 pb-10 px-2 mb-4'>
			<h1 className=' text-white text-[26px] not-italic font-light leading-[45px] mb-4'>Documents</h1>
			<p className='text-[#F4D059] flex items-center gap-4 mb-2 uppercase'>
				<FiDownload />
				Floorplans
			</p>
			<p className='text-[#F4D059] flex items-center gap-4 uppercase'>
				<FiDownload />
				Scope of works
			</p>
		</div>
	)
}

export default Documents
