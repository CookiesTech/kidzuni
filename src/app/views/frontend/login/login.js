
import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Span } from 'app/components/Typography'
import { Card, Checkbox, FormControlLabel, Grid, Button } from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import "../assets/css/style.css"

export default function Login(props) {
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


    const navigate = useNavigate();
    const [state, setState] = useState({});
    const { register } = useAuth();

    

    const email = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

  
    // handle button click of login form
        const handleLogin = () => {
            setError(null);
           
            axios.post('http://feltech.in/kidzuni_backend/public/api/login', { email: email.value, password: password.value })
            .then(response => {
                console.log(response);
           
            //   setUserSession(response.data.token, response.data.user);
            //   props.history.push('/dashboard');
            }).catch(error => {

               
          
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
            });

            //  if (!email) {
            //         errors.email = "name is required!";
            //       }
            //       if (!password) {
            //           errors.password = "Phonenumber is required!";
            //         }

            try {
                register(state.email, state.username)
                navigate('/login/forgotpassword')
            } catch (e) {
                console.log(e)
            }
        }
 

        function useFormInput (initialValue) {
            const [value, setValue] = useState(initialValue);
           
            const handleChange = e => {
              setValue(e.target.value);
              
            }
            return {
              value,
              onChange: handleChange
            }
          }


    

  
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
                            <ValidatorForm autoComplete="off">
                                    <input
                                       type="email"
                                        name="email"
                                        class="form-control"
                                        id="email"
                                        required
                                        value={email.value}
                                        onChange={email.onChange}
                                        placeholder="Enter Email id"
                                    />
                                <div className='login-forgot'>
                                    <a href="" onClick={() => navigate("/login/forgotusername")}>Forgot Username?</a>
                                </div>

                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        placeholder="Password"
                                        required
                                        {...password}
                                    />
                                <div className='login-forgot'>
                                    <a href="" onClick={() => navigate("/login/forgotpassword")}>Forgot password?</a>
                                </div>

                                <div className='register-part'>
                                    <strong> Not a Member yet?</strong>
                                    <Link to="/membership"><a className='nav-link'>Sign in{'>'}</a></Link>
                                </div>
                                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                                <FlexBox>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="contained"
                                        sx={{ textTransform: 'capitalize' }}
                                        onClick={handleLogin}
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
