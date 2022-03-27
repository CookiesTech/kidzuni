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
import Swal from 'sweetalert2'
import PackagesServices from 'app/services/PackagesServices'
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
    top: '100px',
    left: '470px',
}))
const PackageTable = () => {
    const [loading, setLoading] = useState()
    const packagesservices = new PackagesServices(config.baseURL)
    const [formData = [], setFormData] = useState()
    useEffect(() => {
        fetchData()
        setLoading(true)
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchData = async () => {
        await packagesservices.getAll().then((res) => {
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

    const deleteCategory = (e, id) => {
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
                packagesservices.delete(id).then((res) => {
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
                        <TableCell>Package Type</TableCell>
                        <TableCell>Package For</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Additional Price</TableCell>
                        <TableCell>Min Stu Count</TableCell>
                        <TableCell>Max Stu Count</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                {loading && (
                    <StyledProgress size={54} className="buttonProgress" />
                )}
                <TableBody>
                    {formData.length > 0 ? (
                        formData
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.package_for}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>
                                        {row.additional_price}
                                    </TableCell>

                                    <TableCell>{row.minimum_count}</TableCell>
                                    <TableCell>{row.maximum_count}</TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <Icon
                                                color="error"
                                                onClick={(e) =>
                                                    deleteCategory(e, row.id)
                                                }
                                            >
                                                close
                                            </Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No Data Found !
                            </TableCell>
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
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Box>
    )
}

export default PackageTable
