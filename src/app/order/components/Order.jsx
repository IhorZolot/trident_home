'use client'
import ContactYou from '@/shared/ContactYou/ContactYou'
import React from 'react'
import { useForm } from 'react-hook-form'

export const Order = () => {
	const { register, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)
	}

	return (
		<div className='lg:flex justify-center bg-[#F5F5F5]  pb-[110px]'>
			<div className=' bg-white  w-1/2 '>
				<ContactYou />
				<form onSubmit={handleSubmit(submit)} className='px-2 pt-6 flex flex-col gap-6 lg:px-[116px]'>
					<div>
						<label className='flex flex-col gap-2'>
							<span>How large is your house to be?</span>
							<input className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div className='flex flex-col gap-2 '>
						<span>Do you have your own plot of land?</span>
						<label className='flex gap-2'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>yes</span>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>no</span>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>When do you expect the build to take place?</span>
							<input className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>How much do you expect to invest in the build?</span>
							<input className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>How did you find out about us?</span>
							<input className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<span>Do you have architect`s drawings?</span>
						<label className='flex gap-2'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>yes</span>
							<input className='shrink-0 border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>no</span>
						</label>
					</div>
					<div>
						<span>Do you have planning permission?</span>
						<label className='flex gap-2'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>yes</span>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='checkbox' />
							<span>no</span>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>Name and surname</span>
							<input {...register('name')} className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>City</span>
							<input {...register('city')} className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>Phone number</span>
							<input {...register('phone')} className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span>Email address</span>
							<input {...register('email')} className='border border-solid border-[#EBE9E6] py-4 px-4' type='text' />
						</label>
					</div>
					<div>
						<label className='flex gap-2'>
							<input {...register('agree')} type='checkbox' />
							<span>I agree that TRIDENT can contact me to send me the Catalogue of houses.</span>
						</label>
					</div>
					<div>
						<label className='flex gap-2'>
							<input {...register('rules')} type='checkbox' />
							<span>
								I wish to receive information about open house events, other materials relevant to my interests and news
								via Newsletter from TRIDENT
							</span>
						</label>
					</div>
					<p>
						Your consent may be revoked at any time by sending an e-mail to dpo@danwood.pl, with the consequence of the
						erasure of your contact details from the distribution of our materials.
					</p>
					<button type='submit' className='bg-yellow-400 max-w-[200px] mx-auto px-4 py-4 uppercase'>
						Get request
					</button>
					<a
						href='#'
						className='block px-2 pb-6 text-[rgba(61,61,61,0.65)] text-sm font-[275] leading-[17px] underline text-center mb-[80px]'
					>
						You can read our Privacy Policy here
					</a>
				</form>
			</div>
		</div>
	)
}
