import React from 'react'
import Sprite from '../../public/images/Sprite'
import Container from './Container'

const Produce = () => {
	return (
		<Container>
			<div className='mb-8'>
				<span className='block w-[355px] text-[#00204A] text-[26px] not-italic font-light leading-[29.8px] mb-[54px]'>
					Trident Modular Housing produce and assemble modular houses that are very high quality and they can be used as
					temporary as well as permanent residence.
				</span>
				<ul className='flex flex-col gap-4'>
					<li>
						<div className=' flex gap-2 items-center '>
							<Sprite name={'icon'} />
							<h3 className='w-[165.794px] text-[#00204A] text-xs not-italic font-bold leading-[normal] tracking-[3.6px] uppercase'>
								quality
							</h3>
						</div>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
							A quality flexible modular housing solutionset nd they can be used as temporary as well as permanent
							residence.
						</p>
					</li>
					<li>
						<div className=' flex gap-2 items-center '>
							<Sprite name={'icon'} />
							<h3 className='w-[165.794px] text-[#00204A] text-xs not-italic font-bold leading-[normal] tracking-[3.6px] uppercase'>
								design
							</h3>
						</div>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
							A quality flexible modular housing solutionset nd they can be used as temporary as well as permanent
							residence.
						</p>
					</li>
					<li>
						<div className=' flex gap-2 items-center '>
							<Sprite name={'icon'} />
							<h3 className='w-[165.794px] text-[#00204A] text-xs not-italic font-bold leading-[normal] tracking-[3.6px] uppercase'>
								price
							</h3>
						</div>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
							A quality flexible modular housing solutionset nd they can be used as temporary as well as permanent
							residence.
						</p>
					</li>
					<li>
						<div className=' flex gap-2 items-center '>
							<Sprite name={'icon'} />
							<h3 className='w-[165.794px] text-[#00204A] text-xs not-italic font-bold leading-[normal] tracking-[3.6px] uppercase'>
								choice
							</h3>
						</div>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
							A quality flexible modular housing solutionset nd they can be used as temporary as well as permanent
							residence.
						</p>
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default Produce
