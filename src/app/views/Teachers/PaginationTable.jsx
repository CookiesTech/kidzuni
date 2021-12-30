import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const subscribarList = [
    // {
    //     name: 'john doe',
    //     date: '18 january, 2019',
    //     amount: 1000,
    //     status: 'close',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'kessy bryan',
    //     date: '10 january, 2019',
    //     amount: 9000,
    //     status: 'open',
    //     company: 'My Fintech LTD.',
    // },
    // {
    //     name: 'kessy bryan',
    //     date: '10 january, 2019',
    //     amount: 9000,
    //     status: 'open',
    //     company: 'My Fintech LTD.',
    // },
    // {
    //     name: 'james cassegne',
    //     date: '8 january, 2019',
    //     amount: 5000,
    //     status: 'close',
    //     company: 'Collboy Tech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
]

const PaginationTable = (props) => {
    const [formData, setFormData] = useState([])
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)
    useEffect(() => {
        setFormData(props.data)
    }, [props])
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Qualification</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((subscriber, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    {subscriber.first_name}
                                </TableCell>
                                <TableCell align="left">
                                    {subscriber.last_name}
                                </TableCell>
                                <TableCell align="left">
                                    {subscriber.qualification}
                                </TableCell>
                                <TableCell>{subscriber.phone}</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Icon color="error">close</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </StyledTable>

            <TablePagination
                sx={{ px: 2 }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={subscribarList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default PaginationTable
