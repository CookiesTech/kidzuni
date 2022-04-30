import React, { useState, useEffect } from 'react'
import { Grid, Card, Icon } from '@mui/material'
import { Box } from '@mui/system'
import { Small } from 'app/components/Typography'
import PieChart from './PieChart';
import { styled, useTheme } from '@mui/system';
import { config } from 'app/config';
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
    fontSize: '20px',
    color: 'black',
}))
const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}))
const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    textTransform: 'capitalize',
}))
const QuizDetails = (props) => {

    const { palette } = useTheme()
    const [formData, SetFormData] = useState();
    useEffect(() => {
        SetFormData(props?.data)
    }, [props.data]);


    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={4}>
                    <ContentBox>
                        <Icon className="icon">palette</Icon>
                        <Box ml="12px">

                            <Heading>Answered</Heading>
                            <Small sx={{ fontSize: 22 }}>{formData?.correctAnswer_sum}</Small>&nbsp;
                            <Small sx={{ fontSize: 13 }}>QUESTIONS</Small>
                        </Box>
                    </ContentBox>

                </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={4}>
                    <ContentBox>
                        <Icon className="icon">attach_money</Icon>
                        <Box ml="12px">

                            <Heading >Spent</Heading>
                            <Small
                                sx={{ fontSize: 22 }}>
                                {formData?.total_time}
                            </Small>&nbsp;
                            <Small sx={{ fontSize: 13 }}>
                                PRACTISING
                            </Small>
                        </Box>
                    </ContentBox>

                </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
                <StyledCard elevation={4}>
                    <ContentBox>
                        <Icon className="icon">store</Icon>
                        <Box ml="12px">
                            <Heading>Made Progress In</Heading>
                            <Small sx={{ fontSize: 22 }}>{formData?.topicsCount}</Small>&nbsp;
                            <Small sx={{ fontSize: 13 }}>SKILLS</Small>
                        </Box>
                    </ContentBox>
                </StyledCard>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Card sx={{ px: 3, py: 2, mb: 3 }}>
                    <Title>PRACTICE </Title>
                    <SubTitle>Last 30 days</SubTitle>
                    <PieChart
                        height="300px"
                        color={[
                            palette.primary.dark,
                            palette.primary.main,
                            palette.primary.light,
                        ]}
                        graph_value={[{
                            ans: formData?.correctAnswer_sum,
                            wrong: formData?.wrongAnswer_sum,
                            skills: formData?.topicsCount,
                        }]}

                    />
                </Card>

            </Grid>
        </Grid >
    )
}

export default QuizDetails
