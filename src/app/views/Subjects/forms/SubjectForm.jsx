import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    // FormControlLabel,
    // Checkbox,
} from '@mui/material'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import Toast from 'app/components/Toast/Toast'
import React, { useState } from 'react'
import SubjectServices from 'app/services/SubjectServices'
const SubjectForm = () => {
    const subjectservice = new SubjectServices()
    const [inputList, setInputList] = useState([
        { subject_name: '', standard: '' },
    ])

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { subject_name: '', standard: '' }])
    }

    const handleInputChange = (e, index) => {
        const { name } = e.target
        const value = e.target.value
        const list = [...inputList]

        list[index][name] = value

        setInputList(list)
    }
    const handleSubmit = async (event) => {
        event.persist()

        await subjectservice
            .create({
                inputList,
            })
            .then((res) => {
                if (res.data.status) {
                    Toast('success', res.data.message)
                }
            })
    }

    return (
        <div>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {inputList.map((x, i) => {
                    return (
                        <>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Subject
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="subject_name"
                                    value={x?.subject_name}
                                    label="Subject"
                                    onChange={(e) => handleInputChange(e, i)}
                                >
                                    <MenuItem value="English">English</MenuItem>
                                    <MenuItem value="Maths">Maths</MenuItem>
                                    <MenuItem value="Science">Science</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                name="standard"
                                id="outlined-name"
                                label="Standard Name"
                                value={x?.standard}
                                onChange={(e) => handleInputChange(e, i)}
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

            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </div>
    )
}

export default SubjectForm
