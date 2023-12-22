'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { VscArrowRight } from 'react-icons/vsc'
import ContactYou from '@/shared/ContactYou/ContactYou'

const ContactForm = () => {
	const requestSchema = z.object({
		name: z.string().min(3, 'Your name must be more than 3 chars'),
		phone: z.number(),
		email: z.string().email(),
		comment: z.string().max(30, 'Your comment must be less than 30 chars'),
		agree: z.boolean(),
		rules: z.boolean(),
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(requestSchema) })
	const submit = data => {
		console.log(data)
		reset()
	}
	return (
		<div className='lg:flex justify-center bg-[#F5F5F5] lg:pb-[110px]'>
			<div className=' bg-white lg:w-8/12 '>
				<ContactYou />
				<form onSubmit={handleSubmit(submit)} className='px-2 pt-6 flex flex-col gap-6'>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-[11px] font-normal leading-[13px] uppercase '>Your name</span>
							<input
								{...register('name', { required: true, minLength: 3 })}
								type='text'
								placeholder='Name'
								className='border border-solid border-[#EBE9E6]  px-4 py-4'
							/>
						</label>
						{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-[11px] font-normal leading-[13px] uppercase'>Your Phone</span>
							<input
								{...register('phone', { valueAsNumber: true })}
								type='text'
								placeholder='Phone'
								className='border border-solid border-[#EBE9E6]  px-4 py-4'
							/>
						</label>
						{errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-[11px] font-normal leading-[13px] uppercase'>Your E-mail</span>
							<input
								{...register('email')}
								type='text'
								placeholder='E-mail'
								className='border border-solid border-[#EBE9E6]  px-4 py-4'
							/>
						</label>
						{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-[11px] font-normal leading-[13px] uppercase'>Your text</span>
							<textarea
								{...register('comment')}
								type='text'
								placeholder='Type massege'
								className='border border-solid border-[#EBE9E6]  px-4 pt-4 pb-12'
							/>
						</label>
						{errors.comment && <p className='text-red-500'>{errors.comment.message}</p>}
					</div>
					<div>
						<label className='flex gap-3 items-center'>
							<input {...register('agree')} type='checkbox' className=' border border-solid border-[#EBE9E6]' />
							<span className='text-[10px] not-italic font-light leading-3'>
								I agree that TRIDENT can contact me to send me the Catalogue of houses.
							</span>
						</label>
					</div>
					<div>
						<label className='flex gap-3 items-center'>
							<input {...register('rules')} type='checkbox' className=' border border-solid border-[#EBE9E6]' />
							<span className='text-[10px] not-italic font-light leading-3  '>
								I wish to receive information about open house events, other materials relevant to my interests and news
								via Newsletter from TRIDENT
							</span>
						</label>
					</div>
					<p className=' w-[357px] text-[9px] mb-6 lg:w-[558.919px]'>
						By submitting your information you confirm that you have read the Privacy Policy which contains instructions
						regarding the right of access to your data, the possibility of rectifying it and the right to lodge a
						complaint with a supervisory authority. Your consent may be revoked at any time by sending an e-mail to
						dpo@danwood.pl, with the consequence of the erasure of your contact details from the distribution of our
						materials.
					</p>
					<div className='flex justify-center '>
						<button
							type='submit'
							className='flex bg-[#F4D059] justify-center items-center pl-[76px] pr-[77.733px] pt-[17px] pb-[18px] uppercase mb-6 max-w-[300px] gap-3'
						>
							Get request
							<VscArrowRight />
						</button>
					</div>
				</form>
				<a
					href='#'
					className='block px-2 pb-6 text-[rgba(61,61,61,0.65)] text-sm font-[275] leading-[17px] underline text-center mb-[80px]'
				>
					You can read our Privacy Policy here
				</a>
			</div>
		</div>
	)
}

export default ContactForm
