import {
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Icon,
    TablePagination,
    Button,
} from '@mui/material'

import React, { useState, useEffect } from 'react'
import { Box, styled } from '@mui/system'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { config } from 'config'
import Toast from 'app/components/Toast/Toast'
import QuestionServices from 'app/services/QuestionServices'
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
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
const QuestionsTable = (props) => {
    const navigate = useNavigate()
    const questionServices = new QuestionServices(config.baseURL)
    const [formData = [], setFormData] = useState()
    const [file, setFile] = useState()

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchData = async () => {
        await questionServices.getAll().then((res) => {
            if (res?.data?.status) {
                setFormData(res?.data?.data)
            }
        })
    }
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleFileupload = async (e) => {
        const formData = new FormData()
        formData.append('file', file)
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8000/public/api/upload_question',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            })
        } catch (error) {
            console.log(error)
        }
    }
    const editTeacher = (e, id) => {
        navigate('/admin/edit_teacher/' + id)
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
                questionServices.delete(id).then((res) => {
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
            <input
                className="input"
                id="outlined-button-file"
                name="file"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
                <StyledButton
                    variant="contained"
                    component="span"
                    onClick={handleFileupload}
                >
                    Upload
                </StyledButton>
            </label>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Standard</TableCell>
                        <TableCell>Subcategory</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Question</TableCell>
                        <TableCell>Answer</TableCell>
                        <TableCell>Mark</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formData.length > 0 ? (
                        formData
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell align="left">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">
                                        {data?.standard}
                                    </TableCell>
                                    <TableCell align="left">
                                        {data?.subcategory}
                                    </TableCell>{' '}
                                    <TableCell align="left">
                                        <img
                                            src={data?.question_image}
                                            alt="...."
                                            style={{ width: '50px' }}
                                        />
                                    </TableCell>
                                    <TableCell>{data?.question_text}</TableCell>
                                    <TableCell>{data?.answer}</TableCell>
                                    <TableCell>{data?.mark}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Icon
                                                color="primary"
                                                // onClick={(e) =>
                                                //     editTeacher(e, data.id)
                                                // }
                                            >
                                                edit
                                            </Icon>
                                        </IconButton>
                                        <IconButton>
                                            <Icon
                                                color="error"
                                                // onClick={(e) =>
                                                //     deleteTeacher(e, data.id)
                                                // }
                                            >
                                                close
                                            </Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                    ) : (
                        <TableRow>
                            <TableCell> No Data Found..! </TableCell>
                        </TableRow>
                    )}
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

export default QuestionsTable
