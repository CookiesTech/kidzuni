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
import React, { useState, useEffect } from 'react'
import SubjectServices from 'app/services/SubjectServices'
import { config } from 'config'
import { styled } from '@mui/system'
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
const EditSubject = () => {
    const lastItem = window.location.pathname.split('/').pop()
    const subjectservice = new SubjectServices(config.baseURL)
    const navigate = useNavigate()
    const [inputList, setInputList] = useState([
        { subject_name: '', standard: '' },
    ])

    useEffect(() => {
        fetchData()
    }, [lastItem])
    const fetchData = async () => {
        await subjectservice.getSubjectByID(lastItem).then((res) => {
            if (res?.data?.status) {
                setInputList([res?.data?.data])
            }
        })
    }
    // handle click event of the Remove button

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
            .update({
                ...inputList,
                id: lastItem,
            })
            .then((res) => {
                if (res.data.status === true) {
                    Toast('success', res.data.message)
                }
                navigate('/admin/subjectsList/')
            })
    }

    return (
        <Container>
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
                        </>
                    )
                })}
            </Box>

            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Update</Span>
            </Button>
        </Container>
    )
}

export default EditSubject
