'use client'

import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'

import ContactYou from '@/shared/ContactYou/ContactYou'
import InputSelect from '@/shared/InputFields/InputSelect'
import RadioButton from '@/shared/InputFields/RadioButton'
import Checkbox from '@/shared/InputFields/Checkbox'
import {Input} from '@/shared/InputFields/Input'

import { selectCost, selectOurFind, selectSize, selectTimeBuild } from '@/shared/Data/InputData/select-data'

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

					<InputSelect title='How large is your house to be?' options={selectSize}/>
					<InputSelect title='When do you expect the build to take place?' options={selectTimeBuild}/>
					<InputSelect title='How much do you expect to invest in the build?' options={selectCost}/>
					<InputSelect title='How did you find out about us?' options={selectOurFind}/>
					<RadioButton title='Do you have architect`s drawings?' type='architectDrawings'/>
					<RadioButton title='Do you have planning permission?' type='planningPermission' />
					<Input title='Name and surname' label='name' placeholder='Please enter your name and surname' register={register}  fieldNaem='name'/>
					<Input title='City' label='city'  placeholder='Enter city name' register={register}  fieldNaem='city'/>
					<Input title='Phone number' label='phone' placeholder='Please enter your phone number' register={register}  fieldNaem='phone'/>
					<Input title='Email address' label='email' placeholder='Please enter your email address' register={register}  fieldNaem='email'/>
					<Checkbox label='agree' register={register}  fieldNaem='agree' text='I agree that TRIDENT can contact me to send me the Catalogue of houses.'/>
					<Checkbox label='rules' register={register}  fieldNaem='rules' text='I wish to receive information about open house events, other materials relevant to my interests and news
								via Newsletter from TRIDENT'/>
					<p className='w-full text-[12px] leading-[13.33px] px-6'>
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
