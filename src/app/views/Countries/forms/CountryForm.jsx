import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import React, { useState } from 'react'
import FileUploadService from 'app/services/FileUploadService'
import CountryServices from 'app/services/CountryServices'
import { config } from 'config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
toast.configure()

const CountryForm = () => {
    const navigate = useNavigate()
    const fileuploadservice = new FileUploadService()
    const countryservices = new CountryServices(config.baseURL)

    const [inputList, setInputList] = useState([
        { name: '', image: '', code: '' },
    ])

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList]
        list.splice(index, 1)
        setInputList(list)
    }

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { name: '', image: '', code: '' }])
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
            imgArray.push(fileuploadservice.uploadCountry(img.image))
        })
        Promise.all(imgArray).then(async (imgRes) => {
            let imgData = imgRes.map((img, index) => {
                return {
                    image: img,
                    name: inputList[index].name,
                    code: inputList[index].code,
                }
            })
            await countryservices
                .create({
                    data: imgData,
                })
                .then((res) => {
                    if (res.data.status) {
                        toast.success(res.data.message)
                        navigate('/admin/countriesList/')
                    } else {
                        toast.error(res.data.message)
                    }
                })
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
                                name="name"
                                id="outlined-name"
                                label="Country Name"
                                value={x?.name}
                                onChange={(e) =>
                                    handleInputChangeDocument(e, i)
                                }
                            />
                            <TextField
                                name="code"
                                id="outlined-name"
                                label="Country Code"
                                value={x?.code}
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

            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </div>
    )
}

export default CountryForm
