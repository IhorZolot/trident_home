'use client'
import ContactYou from '@/shared/ContactYou/ContactYou'
import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import SelectAnswer from './SelectArswer'

export const Order = () => {
	const { register, handleSubmit } = useForm()
	const submit = data => {
		console.log(data)
	}

	return (
		<div className='lg:flex justify-center bg-[#F5F5F5] pb-[110px]'>
			<div className='bg-white lg:w-8/12'>
				<ContactYou />
				<form onSubmit={handleSubmit(submit)} className='px-2 pt-6 flex flex-col gap-6 lg:px-[116px]'>
					{/* <div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								How large is your house to be?
							</span>
							<input
								className='border border-solid border-[#EBE9E6] py-4 px-4 placeholder-neutral-400'
								type='text'
								placeholder='Select answer'
							/>
						</label>
					</div> */}
					<SelectAnswer data regist />
					<div className='flex flex-col gap-2 '>
						<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
							Do you have your own plot of land?
						</span>
						<label className='flex gap-2 items-center'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='radio' name='land' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='radio' name='land' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								When do you expect the build to take place?
							</span>
							<input
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Select answer'
							/>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								How much do you expect to invest in the build?
							</span>
							<input
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Select answer'
							/>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								How did you find out about us?
							</span>
							<input
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Select answer'
							/>
						</label>
					</div>
					<div>
						<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
							Do you have architect`s drawings?
						</span>
						<label className='flex gap-2 items-center'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='radio' name='land' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
							<input
								className='shrink-0 border rounded-[11px] border-solid border-[#EBE9E6]'
								type='radio'
								name='land'
							/>
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
						</label>
					</div>
					<div>
						<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
							Do you have planning permission?
						</span>
						<label className='flex gap-2 items-center'>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='radio' name='land' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>yes</span>
							<input className='border rounded-[11px] border-solid border-[#EBE9E6]' type='radio' name='land' />
							<span className='text-[rgba(0,0,0,0.60)] text-[15px] font-light leading-[18px]'>no</span>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>Name and surname</span>
							<input
								{...register('name')}
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Please enter your name and surname'
							/>
						</label>
					</div>
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>City</span>
							<input
								{...register('city')}
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Enter city name'
							/>
						</label>
					</div>
					{/* <INPUT label='email' placeholder='' registe={register} fieldNaem='email' />
					<INPUT label='password' placeholder='' registe={register} fieldNaem='password' />
					<INPUT label='name' placeholder='' registe={register} fieldNaem='password' />
					<INPUT label='price' placeholder='' registe={register} fieldNaem='password' />
					<INPUT label='password' placeholder='' registe={register} fieldNaem='password' /> */}
					{/* <div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>{label}</span>
							<input
								// {...register(fieldName)}
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder={placeholder}
							/>
						</label>
					</div> */}
					<div>
						<label className='flex flex-col gap-2'>
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>Email address</span>
							<input
								{...register('email')}
								className='border border-solid border-[#EBE9E6] py-4 px-4'
								type='text'
								placeholder='Please enter your email address'
							/>
						</label>
					</div>
					<div>
						<label className='flex gap-2'>
							<input {...register('agree')} type='checkbox' />
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								I agree that TRIDENT can contact me to send me the Catalogue of houses.
							</span>
						</label>
					</div>
					<div>
						<label className='flex gap-2'>
							<input {...register('rules')} type='checkbox' />
							<span className='text-black text-[11px] font-normal leading-[13px] uppercase'>
								I wish to receive information about open house events, other materials relevant to my interests and news
								via Newsletter from TRIDENT
							</span>
						</label>
					</div>
					<p>
						Your consent may be revoked at any time by sending an e-mail to dpo@danwood.pl, with the consequence of the
						erasure of your contact details from the distribution of our materials.
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
