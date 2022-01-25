import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    // FormControlLabel,
    // Checkbox,
} from '@mui/material'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from 'app/components/Toast/Toast'
import React, { useState } from 'react'
import StandardServices from 'app/services/StandardServices'
import { config } from 'config'
toast.configure()
const StandardForm = () => {
    const standardservice = new StandardServices(config.baseURL)
    const [inputList, setInputList] = useState([{ standard_name: '' }])

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { standard_name: '' }])
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

        await standardservice
            .create({
                data: inputList,
            })
            .then((res) => {
                if (res.data.status === true) {
                    Toast('success', res.data.message)
                } else {
                    Toast('error', res.data.message)
                }
                setInputList([{ standard_name: '' }])
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
                            <TextField
                                name="standard_name"
                                id="outlined-name"
                                label="Standard Name"
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

export default StandardForm
