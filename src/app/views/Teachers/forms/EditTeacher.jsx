import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    // FormControlLabel,
    // Checkbox,
} from '@mui/material'

import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import FileUploadService from 'app/services/FileUploadService'
import TeacherServices from 'app/services/TeacherServices'
import { styled } from '@mui/system'
import { config } from 'config'
import Toast from 'app/components/Toast/Toast'
import { useNavigate } from 'react-router-dom'
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
const EditTeacher = () => {
    const lastItem = window.location.pathname.split('/').pop()
    const navigate = useNavigate()
    const fileuploadservice = new FileUploadService()
    const teacherservice = new TeacherServices(config.baseURL)
    const [inputList, setInputList] = useState([])
    const [state, setState] = useState({})
    useEffect(() => {
        fetchData()
    }, [lastItem])
    const fetchData = async () => {
        await teacherservice.getProfile(lastItem).then((res) => {
            if (res?.data?.status) {
                setState(res?.data?.data?.teacher)
                let imageUpdate = false
                setInputList(
                    res?.data?.data?.images.map((image) => ({
                        ...image,
                        imageUpdate,
                    }))
                )
            }
        })
    }
    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { document_name: '', image: '' }])
    }

    const handleInputChangeImage = (e, index) => {
        const { name } = e.target
        const value = e.target.files[0]
        const list = [...inputList]
        list[index].imageUpdate = true
        list[index][name] = value

        setInputList(list)
    }
    const handleInputChangeDocument = (e, index) => {
        const { name } = e.target
        const value = e.target.value
        const list = [...inputList]

        list[index][name] = value

        setInputList(list)
    }
    const handleSubmit = async (event) => {
        event.persist()
        let imgArray = []
        inputList.forEach((img) => {
            if (img.imageUpdate) {
                imgArray.push(fileuploadservice.upload(img.image))
            } else {
                imgArray.push(img.image)
            }
        })
        Promise.all(imgArray).then(async (imgRes) => {
            let imgData = imgRes.map((img, index) => {
                return {
                    image: img,
                    document_name: inputList[index].document_name,
                }
            })

            await teacherservice
                .update({
                    ...state,
                    img: imgData,
                    id: lastItem,
                })
                .then((res) => {
                    if (res.data.status) {
                        Toast('success', res.data.message)
                        navigate('/admin/teachersList/')
                    }
                })
        })
    }

    return (
        <Container>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    name="username"
                    label="UserName"
                    value={state?.username}
                    onChange={handleChange}
                />
                <TextField
                    name="firstname"
                    label="FirstName"
                    value={state?.first_name}
                    onChange={handleChange}
                />
                <TextField
                    name="lastname"
                    id="outlined-name"
                    label="LastName"
                    value={state?.last_name}
                    onChange={handleChange}
                />
                <TextField
                    name="email"
                    id="outlined-name"
                    label="Email"
                    value={state?.email}
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    id="outlined-name"
                    label="Password"
                    value={state?.password}
                    onChange={handleChange}
                />
                <TextField
                    name="qualification"
                    id="outlined-name"
                    label="Qualification"
                    value={state?.qualification}
                    onChange={handleChange}
                />
                <TextField
                    name="experience"
                    id="outlined-name"
                    label="Experience"
                    value={state?.experience}
                    onChange={handleChange}
                />
                <TextField
                    name="previous_institution_name"
                    id="outlined-name"
                    label="Previous Institution Name"
                    value={state?.previous_institution_name}
                    onChange={handleChange}
                />
                <TextField
                    name="phone"
                    id="outlined-name"
                    label="Phone"
                    value={state?.phone}
                    onChange={handleChange}
                />
                <TextareaAutosize
                    name="address"
                    aria-label="empty textarea"
                    placeholder="Address"
                    value={state?.address}
                    style={{ width: '396px', height: '51px' }}
                />
                {inputList.map((x, i) => {
                    return (
                        <>
                            <TextField
                                name="document_name"
                                id="outlined-name"
                                label="Document Name"
                                value={x?.document_name}
                                onChange={(e) =>
                                    handleInputChangeDocument(e, i)
                                }
                            />
                            <Button variant="contained" component="label">
                                Upload File
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) =>
                                        handleInputChangeImage(e, i)
                                    }
                                />
                            </Button>
                            {/* {x?.image && (
                                <img
                                    src={x.image}
                                    alt="..."
                                    className="bonquet-image-preview"
                                />
                            )} */}
                            <div className="btn-box">
                                {inputList.length !== 1 && (
                                    <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}
                                    >
                                        Remove
                                    </button>
                                )}
                                {inputList.length - 1 === i && (
                                    <button onClick={handleAddClick}>
                                        Add
                                    </button>
                                )}
                            </div>
                        </>
                    )
                })}
            </Box>

            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </Container>
    )
}

export default EditTeacher
