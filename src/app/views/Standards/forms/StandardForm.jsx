import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    // FormControlLabel,
    // Checkbox,
    CircularProgress,
} from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
//import { Box, styled } from '@mui/material/Box'
import { Box, styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import React, { useState, useEffect } from 'react'
import StandardServices from 'app/services/StandardServices'
import CountryServices from 'app/services/CountryServices'
import { config } from 'config'
import { useNavigate } from 'react-router-dom'
toast.configure()
const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '80px',
    left: '425px',
}))
const StandardForm = () => {
    const [loading, setLoading] = useState(true)
    const standardservice = new StandardServices(config.baseURL)
    const countryservice = new CountryServices(config.baseURL)
    const navigate = useNavigate()
    const [inputList, setInputList] = useState([
        { standard_name: '', description: '' },
    ])
    const [country_code, setCounteryCode] = useState()

    const [country = [], setCountry] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await countryservice.getAll().then((res) => {
            if (res.data.status) {
                setCountry(res.data.data)
                setLoading(false)
            }
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
        setInputList([...inputList, { standard_name: '', description: '' }])
    }

    const handleCodeChange = (e) => {
        const { name, value } = e.target
        setCounteryCode({ [name]: value })
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
                code: country_code,
            })
            .then((res) => {
                if (res.data.status) {
                    toast.success(res.data.message)
                    navigate('/admin/standardsList')
                } else {
                    toast.success(res.data.message)
                }
                setInputList([{ standard_name: '', description: '' }])
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
                {loading && (
                    <StyledProgress size={54} className="buttonProgress" />
                )}
                <InputLabel>Country Code</InputLabel>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="country_code"
                        onChange={handleCodeChange}
                    >
                        {country.map((x, i) => {
                            return <MenuItem value={x?.id}>{x?.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <br />
                {inputList.map((x, i) => {
                    return (
                        <>
                            <TextField
                                name="standard_name"
                                id="outlined-name"
                                label="Standard Name"
                                onChange={(e) => handleInputChange(e, i)}
                            />
                            <TextareaAutosize
                                name="description"
                                aria-label="empty textarea"
                                placeholder="Enter Standard Description"
                                onChange={(e) => handleInputChange(e, i)}
                                style={{ width: '396px', height: '51px' }}
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
