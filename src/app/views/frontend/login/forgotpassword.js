import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { Card, Grid, Button } from '@mui/material'
import Navbar from '../home/navbar'
import Footer from '../home/footer'
import axios from "axios"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

    const JWTRegister = styled(JustifyBox)(() => ({
        background: '#1A2038',
        minHeight: '100vh !important',
        '& .card': {
            maxWidth: 800,
            borderRadius: 12,
            margin: '1rem',
        },
    }))

    const initialValues = { email: "", password: "", id: "" };
    const [inputValues, setFormValues] = useState(initialValues);
    const [state, setState] = useState()
    const [forgotdetail, setForgotdetail] = useState();
    const navigate = useNavigate()
    const [showUpdate, setShowUpdate] = useState(false)
    const [showForgot, setShowForgot] = useState(true);

    const [updatedetail, setUpdatedetail] = useState();

    // const handleChange = (val) => {
    //     setState(val.target.value)
    //     console.log(val.target.value);
    // }

    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ inputValues, [name]: value });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        let data = { email: inputValues.email, }
        let result = await axios.post("http://feltech.in/kidzuni_backend/public/api/forgot_password", data);
        setForgotdetail(result.data.data)
        console.log(result.data.data);

        if (result.data.status) {
            setShowUpdate(true);
            setShowForgot(false);
        } else {
            toast.error("Email Not Found");
        }
        localStorage.setItem("forgot-info", JSON.stringify(result.data))
    }



    async function updateFormsubmit(e) {
        e.preventDefault();
        let update = { password: inputValues.password, id: inputValues.id }
        let upresult = await axios.post("http://feltech.in/kidzuni_backend/public/api/update_password", update)
        setUpdatedetail(upresult.data)

    }

    return (
        <div>
            <div className='container'>
                <Navbar />
            </div>
            <div className='forgot-uname'>
                <JWTRegister>
                    <Card className="card">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Sign in Kidzuni</h5>
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
                            {showForgot &&
                                <Grid item lg={7} md={7} sm={7} xs={12}>
                                    <Box p={4} height="100%">
                                        <form autoComplete='off' onSubmit={handleFormSubmit}>
                                            <h5>Enter New Password</h5>
                                            <input
                                                type="text"
                                                name="email"
                                                class="form-control"
                                                placeholder="Enter Email id"
                                                value={inputValues.email}
                                                onChange={inputChange}
                                                required
                                            />

                                            <FlexBox>
                                                <Button
                                                    sx={{ textTransform: 'capitalize' }}
                                                    onClick={() => navigate("/user/login")}
                                                >
                                                    Sign in
                                                </Button>

                                                <Button
                                                    type="submit"
                                                    color="primary"
                                                    variant="contained"
                                                    sx={{ textTransform: 'capitalize' }}
                                                >
                                                    Submit
                                                </Button>
                                            </FlexBox>
                                        </form>
                                    </Box>
                                </Grid>
                            }

                            {showUpdate &&
                                <Grid item lg={7} md={7} sm={7} xs={12}>
                                    <form onSubmit={updateFormsubmit}>
                                        <h5>Reset Your Password</h5>
                                        <input
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            class="form-control"
                                            placeholder="Enter password"
                                            value={inputValues.password}
                                            onChange={inputChange}
                                            required
                                        />
                                        <input
                                            type="number"
                                            name="id"
                                            variant="outlined"
                                            class="form-control"
                                            placeholder="Enter Your id"
                                            value={inputValues.id}
                                            onChange={inputChange}
                                            required
                                        />

                                        <FlexBox>
                                            <Button
                                                sx={{ textTransform: 'capitalize' }}
                                                onClick={() => navigate("/user/login")}
                                            >
                                                Sign in
                                            </Button>

                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                sx={{ textTransform: 'capitalize' }}
                                            >
                                                Submit
                                            </Button>
                                        </FlexBox>
                                    </form>
                                </Grid>
                            }
                        </Grid>
                    </Card>
                </JWTRegister>
            </div>
            <Footer />
        </div>
    )
}
