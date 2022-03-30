import React, { useEffect, useState } from "react";
import { Collapse } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Small } from 'app/components/Typography'
import { toast } from "react-toastify";
import "./student-profile.css";
import ParentService from "../Services/ParentService";
toast.configure();
export default function KidzDetailAdd() {
    const [kiddata, setkiddata] = useState([]);
    const parentservice = new ParentService();
    const [inputList, setInputList] = useState([{ userName: "", email: "", password: "" }]);

    let data = JSON.parse(localStorage.getItem('user-info'));
    let actual_count = parseInt(data.no_of_children);
    let filled_count = parseInt(localStorage.getItem('kidzcout'));
    let balance = actual_count - filled_count;

    console.log(balance);



    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJ1c2VyX2lkIjo0MywiaWF0IjoxNjQ4NjM4MDIwLCJleHAiOjE2NTY0MTQwMjAsInJvbGUiOiIzIn0.vT8WUm9O9EJW936WJnCjcx-ksLkdJUlOyQgTj_E6fVQ'
    let addkid = [{ name: "kid1", email: "kid11@gmail.com" }, { name: "kid2", email: "kid22@gmail.com" }];
    let kidinfo = { data: addkid };

    const handleSubmit = (e) => {
        e.preventDefault();
        parentservice.add_kids(kidinfo).then((res) => {
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
                                        <div>
                                            <form autoComplete="off">
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
                                            <button onSubmit={handleSubmit}>Submit</button>
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