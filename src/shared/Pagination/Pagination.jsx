import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export default function MyPagination() {
	return (
		<Stack spacing={2}>
			<Pagination count={5} variant='outlined' shape='rounded' />
		</Stack>
	)
}
