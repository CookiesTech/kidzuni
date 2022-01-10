import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'

import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import Toast from 'app/components/Toast/Toast'
import React, { useState, useEffect } from 'react'
import FileUploadService from 'app/services/FileUploadService'
import TeacherServices from 'app/services/TeacherServices'
import SubjectServices from 'app/services/SubjectServices'
import { config } from 'config'

const SimpleForm = () => {
    const fileuploadservice = new FileUploadService()
    const teacherservice = new TeacherServices(config.baseURL)
    const subjectservices = new SubjectServices(config.baseURL)

    const [inputList, setInputList] = useState([
        { document_name: '', image: '' },
    ])
    const [subject, setSubject] = useState([])
    const [state, setState] = useState({})
    const [standard, setStandard] = useState([{ standard: '', subject: '' }])
    useEffect(() => {
        const fetchSubjects = async () => {
            await subjectservices.getAll().then((res) => {
                if (res?.data?.status) {
                    setSubject(res?.data?.data)
                }
            })
        }
        fetchSubjects()
    }, [])

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
            imgArray.push(fileuploadservice.upload(img.image))
        })
        Promise.all(imgArray).then(async (imgRes) => {
            let imgData = imgRes.map((img, index) => {
                return {
                    image: img,
                    document_name: inputList[index].document_name,
                }
            })
            await teacherservice
                .create({
                    ...state,
                    img: imgData,
                })
                .then((res) => {
                    if (res.data.status) {
                        Toast('success', res.data.message)
                    }
                })
        })
    }
    const handleInputChange = (e) => {
        const { name } = e.target
        const value = e.target.value
        console.log(name)
    }
    const handleInputChangeEnglish = (e, index) => {
        const { name } = e.target
        const value = e.target.value
        const list = [...standard]

        list[index][name] = value
        setStandard(list)
    }
    console.log(standard)
    return (
        <div>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    name="username"
                    id="outlined-name"
                    label="UserName"
                    onChange={handleChange}
                />
                <TextField
                    name="firstname"
                    id="outlined-uncontrolled"
                    label="FirstName"
                    onChange={handleChange}
                />
                <TextField
                    name="lastname"
                    id="outlined-name"
                    label="LastName"
                    onChange={handleChange}
                />
                <TextField
                    name="email"
                    id="outlined-name"
                    label="Email"
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    id="outlined-name"
                    label="Password"
                    onChange={handleChange}
                />
                <TextField
                    name="qualification"
                    id="outlined-name"
                    label="Qualification"
                    onChange={handleChange}
                />
                <TextField
                    name="experience"
                    id="outlined-name"
                    label="Experience"
                    onChange={handleChange}
                />
                <TextField
                    name="previous_institution_name"
                    id="outlined-name"
                    label="Previous Institution Name"
                    onChange={handleChange}
                />
                <TextField
                    name="phone"
                    id="outlined-name"
                    label="Phone"
                    onChange={handleChange}
                />
                <TextareaAutosize
                    name="address"
                    aria-label="empty textarea"
                    placeholder="Address"
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

                            <TextField
                                name="image"
                                type="file"
                                id="outlined-name"
                                // value={x?.image}
                                onChange={(e) => handleInputChangeImage(e, i)}
                            />
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
            {subject.map((x, i) => {
                var array = x.standard.split(',')

                return (
                    <>
                        <FormControlLabel
                            key={`check-${i}`}
                            name="subject_name"
                            options={x?.subject_name}
                            value={x?.subject_name}
                            control={<Checkbox />}
                            label={x?.subject_name}
                            onChange={(e) => handleInputChangeEnglish(e, i)}
                        />
                        {/* <FormControlLabel
                            name="subject_name"
                            control={<Checkbox />}
                            label={x?.subject_name}
                            onChange={(e) => handleInputChange(e, i)}
                        /> */}
                        <br />
                        {array.map((j, k) => {
                            return (
                                <FormControlLabel
                                    key={`check-${i}`}
                                    name="standard"
                                    options={j}
                                    value={j}
                                    control={<Checkbox />}
                                    label={j}
                                    onChange={(e) =>
                                        handleInputChangeEnglish(e, i)
                                    }
                                />
                            )
                        })}
                        <br />
                    </>
                )
            })}
            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </div>
    )
}

export default SimpleForm
