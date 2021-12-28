import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'

import TextareaAutosize from '@mui/material/TextareaAutosize'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import React, { useState } from 'react'

const SimpleForm = () => {
    const [inputList, setInputList] = useState([
        { firstName: '', lastName: '' },
    ])
    const [state, setState] = useState({})
    const [inputImage, setinputImage] = useState([{ image: null }])
    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)
    }

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: '', lastName: '' }])
    }
    const handleInputChangeImage = (e, index) => {
        const { name } = e.target
        const value = e.target.files[0]
        const list = [...inputImage]

        list[index][name] = value

        setinputImage(list)
    }
    return (
        <div>
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
                                label="Email"
                                value={x.firstName}
                                onChange={(e) => handleInputChange(e, i)}
                            />

                            <TextField
                                name="image"
                                type="file"
                                id="outlined-name"
                                value={x.firstName}
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

            <Button color="primary" variant="contained" type="submit">
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </div>
    )
}

export default SimpleForm
