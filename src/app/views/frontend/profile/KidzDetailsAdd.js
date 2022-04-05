import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Small } from 'app/components/Typography'
import { toast } from "react-toastify";
import "./student-profile.css";
import 'react-toastify/dist/ReactToastify.css'
import ParentService from "../Services/ParentService";
import { useNavigate } from 'react-router-dom';
toast.configure();
export default function KidzDetailAdd() {
    const navigate = useNavigate();

    const parentservice = new ParentService();
    const [inputList, setInputList] = useState([{ name: "", email: "", password: "" }]);

    let data = JSON.parse(localStorage?.getItem?.('user-info'));
    let actual_count = parseInt(data.no_of_children);
    let filled_count = parseInt(localStorage?.getItem?.('kidz_cout'));
    let balance = actual_count - filled_count;

    let kidinfo = { data: inputList };

    const handleSubmit = (e) => {
        e.preventDefault();
        parentservice.add_kids(kidinfo).then((res) => {
            if (res.data.status) {
                localStorage.setItem('kidz_cout', res?.data?.filled_count)
                toast.success(res.data.message)
                navigate('/profile-setting')
            } else {
                toast.error(res.data.message)
            }
        })
            .catch((error) => {
                console.error(error)
            })
    }

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);  //splice add and/or remove array element
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        if (inputList.length + 1 < balance) {
            setInputList([...inputList, { name: "", email: "", password: "" }]);
        } else {
            toast.error('you have reached the maximum limit')
        }

    };

    const [open, setOpen] = React.useState(false); //collapse tab open
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <List
                sx={{ width: '100%' }}
                component="nav" >
                <div className="upload-deteil">
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>

                            <Icon >add_circle</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Add Your Kidz Details" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </div>

                <Collapse in={open} timeout="auto" >
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <div className="kidz-detail">
                                {inputList.map((x, i) => {
                                    return (
                                        <div>
                                            <form autoComplete="off">
                                                <div className="kidz-add">
                                                    <div className="kidz-input-deteil">
                                                        <Small sx={{ fontSize: 16 }}>UserName</Small>
                                                        <input
                                                            name="name"
                                                            placeholder="Enter User Name"
                                                            class="form-control"
                                                            required
                                                            value={x.name}
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="kidz-input-deteil">
                                                        <Small sx={{ fontSize: 16 }}>Email</Small>
                                                        <input
                                                            className="ml10"
                                                            name="email"
                                                            autoComplete="off"
                                                            class="form-control"
                                                            required
                                                            placeholder="Enter your Email"
                                                            value={x.email}
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div>
                                                    <div className="kidz-input-deteil">
                                                        <Small sx={{ fontSize: 16 }}>password</Small>
                                                        <input
                                                            className="ml10"
                                                            name="password"
                                                            autoComplete="off"
                                                            type="password"
                                                            class="form-control"
                                                            required
                                                            placeholder="Enter your password"
                                                            value={x.password}
                                                            onChange={e => handleInputChange(e, i)}
                                                        />
                                                    </div>

                                                    <div className="kidz-add-btn">
                                                        {inputList.length !== 1 && <button
                                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                                    </div>
                                                </div>
                                            </form>
                                            <button onClick={handleSubmit}>Submit</button>
                                        </div>

                                    );
                                })}
                            </div>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    )
}