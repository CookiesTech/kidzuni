import React from 'react'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import Table from './table'

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

const TeachersList = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Teachers List' }]} />
            </div>

            <Box py="12px" />
            <SimpleCard title="Pagination Table">
                <Table />
            </SimpleCard>
        </Container>
    )
}

export default TeachersList
