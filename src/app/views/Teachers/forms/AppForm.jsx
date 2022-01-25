import React from 'react'
import SimpleForm from './SimpleForm'
import EditTeacher from './EditTeacher'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'

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

const AppForm = () => {
    const lastItem = window.location.pathname.split('/').pop()

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Form' },
                    ]}
                />
            </div>

            {lastItem === 'add_teacher' ? (
                <SimpleCard title="Simple Form">
                    <SimpleForm />
                </SimpleCard>
            ) : (
                <SimpleCard>
                    <EditTeacher />
                </SimpleCard>
            )}

            <Box py="12px" />
        </Container>
    )
}

export default AppForm
