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
import { Box, styled, useTheme } from '@mui/system'

import Swal from 'sweetalert2'
import { config } from 'config'
import TeacherServices from 'app/services/TeacherServices'
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
const Small = styled('small')(({ bgcolor }) => ({
    height: 15,
    width: 50,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))
const PaginationTable = (props) => {
    const { palette } = useTheme()
    const bgError = palette.error.main
    const bgSecondary = palette.secondary.main
    const teacherservice = new TeacherServices(config.baseURL)
    const [formData = [], setFormData] = useState()
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchData = async () => {
        await teacherservice.getAll().then((res) => {
            if (res?.data?.status) {
                setFormData(res?.data?.data)
            }
        })
    }
    const [rowsPerPage, setRowsPerPage] = useState(1)
    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const editTeacher = (e, id) => {
        console.log(id)
    }
    const deleteTeacher = (e, id) => {
        Swal.fire({
            title: 'Are you sure want to delete This Teacher? ',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                teacherservice.delete(id).then((res) => {
                    if (res.data.status) {
                        Swal.fire('Deleted!', res.data.message, 'success')
                        fetchData()
                    } else {
                        console.log(res)
                        Swal.fire('Cancelled!', +res.message, 'error')
                    }
                })
            }
        })
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
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formData
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((data, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">
                                    {data.first_name}
                                </TableCell>
                                <TableCell align="left">
                                    {data.last_name}
                                </TableCell>
                                <TableCell align="left">
                                    {data.qualification}
                                </TableCell>
                                <TableCell>{data.phone}</TableCell>
                                <TableCell>
                                    {formData.status === 1 ? (
                                        <Small bgcolor={bgSecondary}>
                                            {formData.status} Active
                                        </Small>
                                    ) : (
                                        <Small bgcolor={bgError}>
                                            Disabled
                                        </Small>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <Icon
                                            color="primary"
                                            onClick={(e) =>
                                                editTeacher(e, data.id)
                                            }
                                        >
                                            edit
                                        </Icon>
                                    </IconButton>
                                    <IconButton>
                                        <Icon
                                            color="error"
                                            onClick={(e) =>
                                                deleteTeacher(e, data.id)
                                            }
                                        >
                                            close
                                        </Icon>
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
                count={formData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default PaginationTable
