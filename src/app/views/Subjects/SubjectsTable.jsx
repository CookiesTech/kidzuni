import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    CircularProgress,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Box, styled } from '@mui/system'
import { config } from 'config'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import SubjectServices from 'app/services/SubjectServices'
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
const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '6px',
    left: '25px',
}))

const SubjectsTable = () => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const subjectservice = new SubjectServices(config.baseURL)
    const [formData = [], setFormData] = useState()
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchData = async () => {
        await subjectservice.getAll().then((res) => {
            if (res?.data?.status) {
                setLoading(false)
                setFormData(res?.data?.data)
            }
        })
    }
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    const [page, setPage] = React.useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const editTeacher = (e, id) => {
        navigate('/admin/edit_subject/' + id)
    }
    const deleteSubject = (e, id) => {
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
                subjectservice.delete(id).then((res) => {
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
                        <TableCell>S.no</TableCell>
                        <TableCell>Subject Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formData
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell align="left">
                                    {row.subject_name}
                                </TableCell>

                                <TableCell>
                                    {/* <IconButton>
                                        <Icon
                                            color="primary"
                                            onClick={(e) =>
                                                editTeacher(e, row.id)
                                            }
                                        >
                                            edit
                                        </Icon>
                                    </IconButton> */}
                                    <IconButton>
                                        <Icon
                                            color="error"
                                            onClick={(e) =>
                                                deleteSubject(e, row.id)
                                            }
                                        >
                                            close
                                        </Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
                {loading && (
                    <StyledProgress size={24} className="buttonProgress" />
                )}
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
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default SubjectsTable
