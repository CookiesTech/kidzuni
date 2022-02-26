
import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Span } from 'app/components/Typography'
import { Card, Checkbox, FormControlLabel, Grid, Button } from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import "../assets/css/style.css"

export default function Login() {
    const FlexBox = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
    }))

    const JustifyBox = styled(FlexBox)(() => ({
        justifyContent: 'center',
    }))

    const ContentBox = styled(JustifyBox)(() => ({
        height: '100%',
        padding: '32px',
        background: 'rgba(0, 0, 0, 0.01)',
    }))

    const IMG = styled('img')(() => ({
        width: '100%',
    }))

    const JWTRegister = styled(JustifyBox)(() => ({
        background: '#1A2038',
        minHeight: '100vh !important',
        '& .card': {
            maxWidth: 800,
            borderRadius: 12,
            margin: '1rem',
        },
    }))


    const navigate = useNavigate()
    const [state, setState] = useState({})
    const { register } = useAuth()

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleFormSubmit = (event) => {
        try {
            register(state.email, state.username)
            navigate('/login/forgotpassword')
        } catch (e) {
            console.log(e)
        }
    }

    let { username, email } = state

    return (
        <JWTRegister>

            <Card className="card">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Sign in to Kidzuni</h5>
                </div>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <ContentBox>
                            <IMG
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                        </ContentBox>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <Box p={4} height="100%">
                            <ValidatorForm onSubmit={handleFormSubmit}>

                                <TextValidator
                                    sx={{ mb: 3, width: '100%' }}
                                    variant="outlined"
                                    size="small"
                                    label="Username"
                                    type="text"
                                    
                                    name="username"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <div className='login-forgot'>
                                    <a href="" onClick={() => navigate("/login/forgotusername")}>Forgot Username?</a>
                                </div>

                                <TextValidator
                                    sx={{ mb: '16px', width: '100%' }}
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    name="password"
                                    type="password"
                                  
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <div className='login-forgot'>
                                    <a href="" onClick={() => navigate("/login/forgotpassword")}>Forgot password?</a>
                                </div>

                                <div className='register-part'>
                                    <strong> Not a Member yet?</strong>
                                    <Link to="/membership"><a className='nav-link'>Sign in{'>'}</a></Link>
                                </div>


                                <FlexBox>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize' }}
                                    >
                                        Sign in
                                    </Button>

                                </FlexBox>
                            </ValidatorForm>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </JWTRegister>
    )
}
