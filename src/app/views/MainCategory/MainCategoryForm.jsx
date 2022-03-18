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
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from 'app/components/Toast/Toast'
import React, { useState, useEffect } from 'react'
import MainCategoryServices from 'app/services/MainCategoryServices'
import StandardServices from 'app/services/StandardServices'
import CountryServices from 'app/services/CountryServices'
import { useNavigate } from 'react-router-dom'
import { config } from 'config'
toast.configure()
const MainCategoryForm = () => {
    const maincategoryservices = new MainCategoryServices(config.baseURL)
    const standardservice = new StandardServices(config.baseURL)
    const countryservices = new CountryServices(config.baseURL)
    const [inputList, setInputList] = useState([{ category_name: '' }])
    const [formData = [], setFormData] = useState()
    const [standard, setStandard] = useState({})
    const [country = [], setCountry] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetchCountryData()
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchCountryData = async () => {
        await countryservices.getAll().then((res) => {
            if (res.data.status) {
                setCountry(res?.data.data)
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
        setInputList([...inputList, { category_name: '' }])
    }

    const handleInputChange = (e, index) => {
        const { name } = e.target
        const value = e.target.value
        const list = [...inputList]

        list[index][name] = value

        setInputList(list)
    }

    const handleStandardChange = (e) => {
        const { name, value } = e.target
        setStandard({ [name]: value })
    }
    const handlecountryChange = (e) => {
        fetchStandardData(e.target.value)
    }

    const fetchStandardData = async (id) => {
        await standardservice
            .getStandardbycountry({ country_code: id })
            .then((res) => {
                if (res.data.status) {
                    setFormData(res.data.data)
                }
            })
    }
    const handleSubmit = async (event) => {
        event.persist()

        await maincategoryservices
            .create({
                data: inputList,
                standard: standard,
            })
            .then((res) => {
                if (res.data.status) {
                    Toast('success', res.data.message)
                    navigate('/admin/maincategoryList')
                } else {
                    Toast('error', res.data.message)
                }
                setInputList([{ category_name: '' }])
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
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Country
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="country"
                        name="country"
                        onChange={handlecountryChange}
                    >
                        {country.map((x, i) => {
                            return <MenuItem value={x?.id}>{x?.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Standard
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="standard"
                        name="standard"
                        onChange={handleStandardChange}
                    >
                        {formData.map((x, i) => {
                            return (
                                <MenuItem value={x?.id}>
                                    {x?.standard_name}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>

                {inputList.map((x, i) => {
                    return (
                        <div key={`check-${i}`}>
                            <TextField
                                fullWidth
                                name="category_name"
                                id="outlined-uncontrolled"
                                label="MainCategory Name"
                                onChange={(e) => handleInputChange(e, i)}
                            />
                            <br /> <br />
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
                        </div>
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

export default MainCategoryForm
