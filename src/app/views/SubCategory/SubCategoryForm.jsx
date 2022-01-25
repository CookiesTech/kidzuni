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
import SubCategoryServices from 'app/services/SubCategoryServices'
import { useNavigate } from 'react-router-dom'
import { config } from 'config'
toast.configure()
const SubCategoryForm = () => {
    const maincategoryservices = new MainCategoryServices(config.baseURL)
    const subcategoryservices = new SubCategoryServices(config.baseURL)
    const [inputList, setInputList] = useState([{ category_name: '' }])
    const [formData = [], setFormData] = useState()
    const [mc_id, setmc_id] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line no-use-before-define
    }, [])

    const fetchData = async () => {
        await maincategoryservices.getAll().then((res) => {
            if (res?.data?.status) {
                setFormData(res?.data?.data)
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
        setmc_id({ [name]: value })
    }

    const handleSubmit = async (event) => {
        event.persist()

        await subcategoryservices
            .create({
                data: inputList,
                mc_id: mc_id,
            })
            .then((res) => {
                if (res.data.status === true) {
                    Toast('success', res.data.message)
                    navigate('/admin/subcategoryList')
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
                    <InputLabel>MainCategory</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="mc_id"
                        name="mc_id"
                        onChange={handleStandardChange}
                    >
                        {formData.map((x, i) => {
                            return <MenuItem value={x?.id}>{x?.name}</MenuItem>
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
                                label="SubCategory Name"
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

export default SubCategoryForm
