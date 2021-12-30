import React, { useState, useEffect } from 'react'
import PaginationTable from './PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import TeacherServices from 'app/services/TeacherServices'
import { config } from 'config'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppTable = () => {
    const teacherservice = new TeacherServices(config.baseURL)
    const [formData, setFormData] = useState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
        await teacherservice.getAll().then((res) => {
            setFormData(res.data.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Table' },
                    ]}
                />
            </div>

            <Box py="12px" />
            <SimpleCard title="Pagination Table">
                <PaginationTable data={formData} />
            </SimpleCard>
        </Container>
    )
}

export default AppTable
