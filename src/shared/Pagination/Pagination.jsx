import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useHouses } from '@/hooks/useHouses'

export default function MyPagination({ count }) {
	const { page, setPage } = useHouses()
	const handleChange = (e, value) => {
		console.log(e.target.innerText)
		setPage(value)
	}
	return (
		<Stack spacing={2}>
			<Pagination page={page} onChange={handleChange} count={count} variant='outlined' shape='rounded' />
		</Stack>
	)
}
