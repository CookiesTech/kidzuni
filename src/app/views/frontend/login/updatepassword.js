import useAuth from 'app/hooks/useAuth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Box, styled } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Card, Grid, Button } from '@mui/material'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Footer from '../home/footer'
import Navbar from '../home/navbar'
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


    const navigate = useNavigate()
    const initialValues = { password: "", id: "" };
    const [inputValues, setFormValues] = useState(initialValues);
    const [updatedetail, setUpdatedetail] = useState();
    const [state, setState] = useState({})
    const { register } = useAuth()


    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ inputValues, [name]: value });

    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        let update = { email: inputValues.email, id: inputValues.id }
        let result = await axios.post("http://feltech.in/kidzuni_backend/public/api/update_password", update);
        setUpdatedetail(result.data.data)
        console.log(result.data.data);


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
                            <Grid item lg={7} md={7} sm={7} xs={12}>
                                <Box p={4} height="100%">
                                    <ValidatorForm onSubmit={handleFormSubmit}>
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
                                    </ValidatorForm>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </JWTRegister>
            </div>

            <Footer />
        </div>

    )
}
