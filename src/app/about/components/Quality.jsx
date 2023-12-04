import React from 'react'
import Sprite from '../../../../public/images/Sprite'
import Container from '@/components/Container'

const Quality = () => {
	return (
		<Container>
			<ul className='flex flex-col gap-4 mb-12 bg-[#F5F5F5] py-12'>
				<li>
					<div className=' flex gap-4 items-center '>
						<Sprite name={'time'} />
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase'>
							Quick Turnaround
						</h3>
					</div>
					<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
						Two to three months from order to completion on site.
					</p>
				</li>
				<li>
					<div className=' flex gap-4 items-center '>
						<Sprite name={'cost'} />
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase'>
							Low Cost
						</h3>
					</div>
					<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
						Trident Modular Housing LTD buildings are cheaper than those of our competitors.t
					</p>
				</li>
				<li>
					<div className=' flex gap-4 items-center '>
						<Sprite name={'quality'} />
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase'>
							Top quality
						</h3>
					</div>
					<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
						Timber-frame structures manufactured off site with high precision in factory conditions.
					</p>
				</li>
				<li>
					<div className=' flex gap-4 items-center '>
						<Sprite name={'flex'} />
						<h3 className='w-[197px] text-[#00204A] text-xs font-bold leading-[normal] tracking-[3.6px] uppercase'>
							Flexibility
						</h3>
					</div>
					<p className='block w-[210.291px] text-[#00204A] text-sm font-light ml-12'>
						Finishing, specification and appliances to meet your requirements.
					</p>
				</li>
			</ul>
		</Container>
	)
}

export default Quality
