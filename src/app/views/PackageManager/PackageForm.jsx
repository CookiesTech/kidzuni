import { Button, Icon } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState, useEffect } from 'react'
import PackagesServices from 'app/services/PackagesServices'
import { useNavigate } from 'react-router-dom'
import { config } from 'config'
toast.configure()

const PackageForm = () => {
    const packageservices = new PackagesServices(config.baseURL)
    const [inputList, setInputList] = useState()
    const [showschool, setShowSchool] = useState(false)
    const [showprice, setShowPrice] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
    }, [])
    const handleTypeChange = (e) => {
        const { name, value } = e.target
        setInputList({
            ...inputList,
            [name]: value,
        })
        if (e.target.value === 'school') {
            setShowSchool(true)
            setShowPrice(false)
        } else {
            setShowSchool(false)
            setShowPrice(true)
        }
    }
    // handle click event of the Remove button

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputList({
            ...inputList,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.persist()

        await packageservices
            .create({
                data: inputList,
            })
            .then((res) => {
                if (res.data.status === true) {
                    toast.success(res.data.message)
                    navigate('/admin/packagesList')
                } else {
                    toast.error(res.data.message)
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
                <FormControl fullWidth>
                    <InputLabel>Package Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="outlined-uncontrolled"
                        name="type"
                        onChange={handleInputChange}
                    >
                        <MenuItem value="annual">Annual</MenuItem>
                        <MenuItem value="monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel>Package For</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="outlined-uncontrolled"
                        name="package_for"
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="parent">Parent</MenuItem>
                        <MenuItem value="school">School</MenuItem>
                    </Select>
                </FormControl>
                {showprice && (
                    <>
                        <TextField
                            fullWidth
                            type="number"
                            name="price"
                            id="outlined-uncontrolled"
                            label="Price Per Student"
                            onChange={handleInputChange}
                        />

                        <TextField
                            fullWidth
                            name="additional_price"
                            id="outlined-uncontrolled"
                            type="number"
                            label="Additional Price Per Student"
                            onChange={handleInputChange}
                        />
                    </>
                )}
                {showschool && (
                    <>
                        <TextField
                            fullWidth
                            name="student_min_count"
                            id="outlined-uncontrolled"
                            label="Student Min Count"
                            type="number"
                            onChange={handleInputChange}
                        />
                        <TextField
                            fullWidth
                            name="student_max_count"
                            type="number"
                            id="outlined-uncontrolled"
                            label="Student Max Count"
                            onChange={handleInputChange}
                        />

                        <TextField
                            fullWidth
                            name="price"
                            type="number"
                            id="outlined-uncontrolled"
                            label="Price"
                            onChange={handleInputChange}
                        />
                    </>
                )}
            </Box>

            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Save</Span>
            </Button>
        </div>
    )
}

export default PackageForm
