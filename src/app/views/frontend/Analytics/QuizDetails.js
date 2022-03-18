import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const QuizDetails = () => {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={4}>
                    <ContentBox>
                        <Icon className="icon">palette</Icon>
                        <Box ml="12px">

                            <Heading>Answered</Heading>
                            <Small>250</Small>&nbsp;
                            <Small>Questions</Small>
                        </Box>
                    </ContentBox>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={4}>
                    <ContentBox>
                        <Icon className="icon">attach_money</Icon>
                        <Box ml="12px">

                            <Heading>Spent</Heading>
                            <Small sx={{ lineHeight: 1 }}>
                                3hr 15min
                            </Small>
                            <Small sx={{ lineHeight: 1 }}>&nbsp;
                                Practising
                            </Small>
                        </Box>
                    </ContentBox>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        <Icon className="icon">store</Icon>
                        <Box ml="12px">

                            <Heading>Made Progress In</Heading>
                            <Small>8 &nbsp; Skills</Small>
                        </Box>
                    </ContentBox>
                    <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip>
                </StyledCard>
            </Grid>

        </Grid>
    )
}

export default QuizDetails
