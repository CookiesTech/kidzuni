import React, { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import { Box, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Card, Grid, Button } from '@mui/material'

import "../assets/css/style.css"
import Navbar from '../home/navbar';
import Footer from '../home/footer';
toast.configure()
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
    const initialValues = { email: "", password: "" };
    const [inputValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...inputValues, [name]: value });
        // console.log(name); return false;
    };

    async function formSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(inputValues));
        setIsSubmit(true);

        let data = {
            email: inputValues.email,
            password: inputValues.password
        }
        let result = await axios.post("http://feltech.in/kidzuni_backend/public/api/login", data);

        if (result.data.status) {

            toast.success("Login Success");
            localStorage.setItem("user-info", JSON.stringify(result.data.user))
            localStorage.setItem("token", result.data.token)


            if (parseInt(result?.data?.user?.role) === 3) {
                localStorage.setItem("kidz_info", JSON.stringify(result.data.kids_data))
                localStorage.setItem("kidz_cout", JSON.stringify(result.data.kids_data.length))
                console.log(result.data.kids_data);
            }
            navigate('/home')

        } else {
            toast.error("Login Failed");
        }


        // localStorage.setItem('login', JSON.stringify({
        //     login: true,
        //     token: result.token,
        // }))

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
        <div>
            <div className='container'>
                <Navbar />
            </div>
            <div className="login-bg-setting">
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
                                        {/* <div className='login-forgot'>
                                            <a href="" onClick={() => navigate("/login/forgotpassword")}>Forgot Username?</a>
                                        </div> */}

                                        <div className='login-forgot'>
                                            <Link className="" to="/login/forgotpassword">Forgot Username?</Link>
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
                                        {/* <div className='login-forgot'>
                                            <a href="" onClick={() => navigate("/login/updatepassword")}>Forgot password?</a>
                                        </div> */}
                                        <div className='login-forgot'>
                                            <Link to="/login/updatepassword">Forgot Password?</Link>
                                        </div>

                                        <div className='register-part'>
                                            <strong> Not a Member yet?</strong>
                                            <Link to="/home/membership"><a className='nav-link'>Sign up{'>'}</a></Link>
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
            </div>
            <Footer />
        </div>

    )
} 