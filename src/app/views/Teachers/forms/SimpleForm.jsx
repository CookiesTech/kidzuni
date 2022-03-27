import {
    Button,
    Icon,
    // Grid,
    // Radio,
    // RadioGroup,
    FormControlLabel,
    CircularProgress,
    Checkbox,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Box, styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import FileUploadService from 'app/services/FileUploadService'
import TeacherServices from 'app/services/TeacherServices'
import SubjectServices from 'app/services/SubjectServices'
import StandardServices from 'app/services/StandardServices'
import CountryServices from 'app/services/CountryServices'
import { SimpleCard } from 'app/components'
import { config } from 'config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
toast.configure()
const StyledProgress = styled(CircularProgress)(() => ({
    position: 'absolute',
    top: '700px',
    left: '250px',
}))
const SimpleForm = () => {
    const navigate = useNavigate()
    const fileuploadservice = new FileUploadService()
    const countryservices = new CountryServices(config.baseURL)
    const teacherservice = new TeacherServices(config.baseURL)
    const subjectservices = new SubjectServices(config.baseURL)
    const standardservices = new StandardServices(config.baseURL)

    const [inputList, setInputList] = useState([
        { document_name: '', image: '' },
    ])
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState({})
    const [mapStandard, setmapStandard] = useState([])
    const [subject, setSubject] = useState([{ subject_name: [] }])
    const [standard, setStandard] = useState([{ standard_name: '' }])
    const [country = [], setCountry] = useState()
    useEffect(() => {
        fetchSubjects()
        fetchCountryData()
    }, [])

    const fetchCountryData = async () => {
        await countryservices.getAll().then((res) => {
            if (res.data.status) {
                setLoading(false)
                setCountry(res?.data.data)
            }
        })
    }
    const fetchSubjects = async () => {
        await subjectservices.getAll().then((res) => {
            if (res?.data?.status) {
                setSubject(res?.data?.data)
            }
        })
    }

    const handlecountryChange = (e) => {
        setLoading(true)
        fetchStandardData(e.target.value)
    }

    const fetchStandardData = async (id) => {
        await standardservices
            .getStandardbycountry({ country_code: id })
            .then((res) => {
                if (res.data.status) {
                    setLoading(false)
                    setStandard(res.data.data)
                }
            })
    }
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
                    std_id: mapStandard,
                })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.status) {
                        toast.success(res.data.message)
                        navigate('/admin/teachersList/')
                    } else {
                        toast.error(res.data.message)
                    }
                })
        })
    }
    const ChangeSubject = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
        //setmapSubject({ sub_id: e.target.value })
    }
    const ChangeStandard = (e) => {
        setmapStandard([...mapStandard, { std_id: e.target.value }])
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
                return (
                    <>
                        <FormControlLabel
                            name="subject_id"
                            control={<Checkbox />}
                            label={x?.subject_name}
                            value={x?.id}
                            onChange={(e) => ChangeSubject(e)}
                        />

                        <br />
                    </>
                )
            })}
            <br />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
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
            {loading && <StyledProgress size={44} className="buttonProgress" />}
            <SimpleCard>
                {standard.map((y, i) => {
                    return (
                        <>
                            <FormControlLabel
                                name="standard_id"
                                control={<Checkbox />}
                                label={y.standard_name}
                                value={y?.id}
                                onChange={(e) => ChangeStandard(e)}
                            />
                        </>
                    )
                })}
            </SimpleCard>
            <Button color="primary" variant="contained" onClick={handleSubmit}>
                <Icon>send</Icon>
                <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
            </Button>
        </div>
    )
}

export default SimpleForm
