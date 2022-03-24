import React, { useState } from "react";
import { Collapse } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Small } from 'app/components/Typography'

import "./student-profile.css";


export default function KidzDetailAdd() {

    const [inputList, setInputList] = useState([{ userName: "", email: "", password: "" }]);

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
        setInputList([...inputList, { userName: "", email: "", password: "" }]);
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
                            <InboxIcon />
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
                                        <div className="kidz-add">
                                            <div className="kidz-input-deteil">
                                                <Small sx={{ fontSize: 16 }}>UserName</Small>
                                                <input
                                                    name="userName"
                                                    placeholder="Enter User Name"
                                                    class="form-control"
                                                    required
                                                    value={x.userName}
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
                                                <Small sx={{ fontSize: 16 }}>Password</Small>
                                                <input
                                                    className="ml10"
                                                    name="password"
                                                    type="password"
                                                    class="form-control"
                                                    required
                                                    placeholder="Enter your Password"
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