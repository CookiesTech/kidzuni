
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

    const Login = styled(JustifyBox)(() => ({
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

    const initialValues = { email: "", password: "" };
    const [inputValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...inputValues, [name]: value });
        console.log(name); return false;
    };


    async function formSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(inputValues));
        setIsSubmit(true);


        let data = {
            email: inputValues.email,
            password: inputValues.password
        }
        console.log(data);

        let result = await fetch("http://feltech.in/kidzuni_backend/public/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }

        })

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
    }


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };
        
  
    return (
        <div className='login-center'>
           
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
                            <form autoComplete="off" onSubmit={formSubmit} >
                                    <input
                                       type="email"
                                        name="email"
                                        class="form-control"
                                        id="email"
                                        required
                                        value={inputValues.email}
                                        onChange={inputChange}

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
                                        value={inputValues.password}
                                        onChange={inputChange}

                                        required
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
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
            
        </div>
    )
}
