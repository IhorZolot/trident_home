import React from 'react'
import Sprite from '../../../../public/images/Sprite'
import Container from '@/shared/Container/Container'

const Quality = () => {
	return (
		<Container>
			<ul className='flex flex-col gap-4 mb-12 bg-[#F5F5F5] py-12 lg:flex-row lg:gap-14 '>
				<li className='flex gap-4 items-start lg:flex-col '>
					<Sprite name={'time'} />
					<div className='flex flex-col gap-2 py-2'>
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase mb-2'>
							Quick Turnaround
						</h3>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light'>
							Two to three months from order to completion on site.
						</p>
					</div>
				</li>
				<li className='flex gap-4 items-start lg:flex-col'>
					<Sprite name={'cost'} />
					<div className='flex flex-col gap-2 py-2'>
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase mb-2'>
							Low Cost
						</h3>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light'>
							Trident Modular Housing LTD buildings are cheaper than those of our competitors.t
						</p>
					</div>
				</li>
				<li className='flex gap-4 items-start lg:flex-col'>
					<Sprite name={'quality'} />
					<div className='flex flex-col gap-2 py-2'>
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase mb-2'>
							Top quality
						</h3>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light'>
							Timber-frame structures manufactured off site with high precision in factory conditions.
						</p>
					</div>
				</li>
				<li className='flex gap-4 items-start lg:flex-col'>
					<Sprite name={'flex'} />
					<div className='flex flex-col gap-2 py-2'>
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase mb-2'>
							Flexibility
						</h3>
						<p className='block w-[210.291px] text-[#00204A] text-sm font-light'>
							Finishing, specification and appliances to meet your requirements.
						</p>
					</div>
				</li>
			</ul>
		</Container>
	)
}

export default Quality
