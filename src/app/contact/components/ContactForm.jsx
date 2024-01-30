'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ContactYou from '@/shared/ContactYou/ContactYou'
import { Input } from '@/shared/InputFields/Input'
import Checkbox from '@/shared/InputFields/Checkbox'
import { FormButton } from '@/shared/Button/FormButton'

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
				<form onSubmit={handleSubmit(submit)} className='px-2 pt-6 flex flex-col gap-6 lg:mx-[116px]'>
					<Input label='Your name'
					 placeholder='Name' 
					 fieldName='name'
					register={register}
					style='border border-solid border-[#EBE9E6] py-4 px-4 '
					custom={{required: true, minLength: 3}}
					error={errors.name && errors.name.message}
					/>
					<Input label='Your Phone' placeholder='phone' fieldName='phone'  register={register} style='border border-solid border-[#EBE9E6] py-4 px-4'
					custom={{ valueAsNumber: true }}
					error={errors.phone && errors.phone.message}
					/>
					<Input label='Your E-mail' placeholder='email' fieldName='email'  register={register} style='border border-solid border-[#EBE9E6] py-4 px-4'
					error={errors.email && errors.email.message}/>
					<Input label='Your text' placeholder='Type message' fieldName='comment'  register={register} 
					style='border border-solid border-[#EBE9E6]  px-4 pt-4 pb-12'
					error={errors.comment && errors.comment.message}/>
					<Checkbox  label='agree' register={register} fieldName='agree' custom={{required: true }}
					error={errors.agree && errors.agree.message} 
					style='text-[10px] font-light leading-3' text='I agree that TRIDENT can contact me to send me the Catalogue of houses.'/>
					<Checkbox  label='rules' register={register}  fieldName='rules' 
					style='text-[10px] font-light leading-3' text='I wish to receive information about open house events, other materials relevant to my interests and news
					via Newsletter from TRIDENT'/>
					<p className=' w-full mx-auto text-[9px] mb-6 lg:w-[559px text-center]'>
						By submitting your information you confirm that you have read the Privacy Policy which contains instructions
						regarding the right of access to your data, the possibility of rectifying it and the right to lodge a
						complaint with a supervisory authority. Your consent may be revoked at any time by sending an e-mail to
						dpo@danwood.pl, with the consequence of the erasure of your contact details from the distribution of our
						materials.
					</p>
					<div className='flex justify-center '>
						<FormButton />
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
