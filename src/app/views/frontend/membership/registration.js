import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../home/navbar";
import Helmet from "react-helmet";
import Footer from "../home/footer";
import PackageService from "../Services/PackageService"
import CounrtyService from '../Services/CountryService';
import NavbarMenus from "../home/NavbarMenus";
import { config } from 'app/config';
import { FaEyeSlash, FaEye } from 'react-icons/fa'
toast.configure();
export default function Registration() {
    let packageservice = new PackageService(config.baseURL);
    let counrtyservice = new CounrtyService(config.baseURL);
    const [inputValue, setInputValue] = useState("");
    const [schoolPackage = [], setschoolPackage] = useState();
    const [packagefor, setPackageFor] = useState('parent');
    const [type, setType] = useState('monthly');
    const [showParent, setShowParent] = useState(true)
    const initialValues = { name: "", email: "", password: "", countrycode: "", phonenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [additional_price, setAdditionalPrice] = useState(0);
    const [singleKidPrice, setSingleKidPrice] = useState();
    const navigate = useNavigate();
    const [child_count, setChildCount] = useState(1)
    const [counrtyinfo, setCountryinfo] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);
    useEffect(() => {
        getParentPackage();
        getSchoolStudentCount();
        countrydata();

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formErrors]);
    const countrydata = async () => {
        try {
            const data = await counrtyservice.countrylistdata();
            setCountryinfo(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const getSchoolStudentCount = async () => {
        try {
            let data1 = { package_for: 'school', type: type }
            const data = await packageservice.getallpackage(data1);
            setschoolPackage(data.data.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getParentPackage = async () => {
        try {

            const data = await packageservice.getallpackage({ package_for: packagefor, type: type });
            setAdditionalPrice(data?.data?.data[0]?.additional_price);
            setSingleKidPrice(data?.data?.data[0]?.price)

            setInputValue(data?.data?.data[0]?.price);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleChildrenCountParent = (e) => {

        if (parseInt(e.target.value) > 1) {
            let additional_of_child = parseInt(e.target.value - 1);
            let newPrice = parseInt(additional_of_child * additional_price);
            var n1 = parseInt(singleKidPrice);//price for single student
            var n2 = parseInt(newPrice);//have to minus selected student 1 balance student for applicable additional price
            var ans = n1 + n2;
            setChildCount(parseInt(e.target.value));

            setInputValue(ans);
        }
        else {

            setChildCount(e.target.value);
            setInputValue(singleKidPrice);
        }
    }

    const handleTypeChange = async (e) => {
        let data1 = { package_for: packagefor, type: e.target.value }
        const data = await packageservice.getallpackage(data1);

        if (data.data.status) {
            if (packagefor === 'parent') {
                let total_child = child_count;
                let additional_of_child = parseInt(total_child - 1);
                let newPrice = parseInt(additional_of_child * data.data?.data[0]?.additional_price);
                var n1 = parseInt(data?.data?.data[0]?.price);//price for single student
                var n2 = parseInt(newPrice);//have to minus selected student 1 balance student for applicable additional price
                var ans = n1 + n2;
                setAdditionalPrice(data.data?.data[0]?.additional_price);
                setSingleKidPrice(data?.data?.data[0]?.price)
                setInputValue(ans);
                setType(e.target.value)

            }//for package school
            else {
                let data1 = { package_for: 'school', type: e.target.value }
                const data = await packageservice.getallpackage(data1);
                setschoolPackage(data.data.data);
                setChildCount(0)
                setType(e.target.value)
                setInputValue(0);
                setAdditionalPrice(0)
            }
        }

    }

    const handlePackageChange = async (e) => {
        if (e.target.value === 'school') {
            setPackageFor('school')
            setInputValue(0)
            setChildCount(0);
            setAdditionalPrice(0)
            setType('')
            setShowParent(false)

        } else {
            setType('monthly')
            let data1 = { package_for: e.target.value, type: 'monthly' }
            const data = await packageservice.getallpackage(data1);
            if (data.data.status) {
                setPackageFor('parent');
                setInputValue(parseInt(data?.data?.data[0]?.price));
                setChildCount(1);
                // setType('')
                setAdditionalPrice(parseInt(data?.data?.data[0]?.additional_price));
                setShowParent(true)
            }
        }

    }
    const handleChildrensCountSchool = (e) => {
        console.log(schoolPackage);
        console.log({ 'price': schoolPackage[e.target.value].price });
        setChildCount(schoolPackage[e.target.value].minimum_count + '-' + schoolPackage[e.target.value].maximum_count);
        setInputValue(schoolPackage[e.target.value].price)
        setAdditionalPrice(0)
    }

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    }



    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        let data = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            country_code: formValues.countrycode,
            no_of_children: child_count,
            type: type,
            package_for: packagefor,
            price: inputValue,
        };

        const result = await axios.post(
            config.baseURL + "register",
            data
        );

        if (result.data.status) {
            toast.success("user successfully registered");
            navigate('/user/login')
        } else {
            toast.error(result.data.message.email);
        }

        // localStorage.setItem("user-info", JSON.stringify(result))
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "*name is required!";
        }
        if (!values.phonenumber) {
            errors.phonenumber = "Phonenumber is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };
    return (
        <div>
            <Helmet>
                <title>KidzUni | Registration</title>
            </Helmet>
            <div className="container">
                <Navbar />
            </div>
            <NavbarMenus />
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="member-part">
                            {Object.keys(formErrors).length === 0 && isSubmit ? (
                                <div className="">Signed in successfully</div>
                            ) : (
                                <p></p>
                            )}
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <h4>Become a Member</h4>
                                <div className="teaching">
                                    <img src="../../../assets/frontend/images/teaching.png" alt="teach" />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit dui, dictum at blandit eget,
                                        vulputate sed nisi. Sed auctor volutpat turpis, eu egestas ligula. Cras justo ligula, consectetur,
                                        cursus viverra diam.
                                    </p>
                                </div>
                                <hr />

                                <div className="register-info-detail">
                                    <span className="info-heading">Select Your Plan Details</span><hr />
                                    <div className="plan-part">
                                        <span className="plan-heading">Package For</span>
                                        <button type="button" style={packagefor === 'parent' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} name="package_for" value="parent" className="select-option sub-input " onClick={handlePackageChange}>
                                            Parent
                                        </button>
                                        <button type="button" style={packagefor === 'school' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} name="package_for" value="school" className="select-option sub-input" onClick={handlePackageChange}>
                                            School
                                        </button>
                                    </div>

                                    <div className="type-part">
                                        <span className="plan-heading">Choose a Type</span>
                                        <button type="button" name="type" style={type === 'monthly' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} value="monthly" className="select-option sub-input" onClick={handleTypeChange}>
                                            Monthly
                                        </button>
                                        <button type="button" name="type" style={type === 'annual' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} value="annual" className="select-option sub-input" onClick={handleTypeChange}>
                                            Annual
                                        </button>
                                    </div>

                                    {
                                        showParent && packagefor === 'parent' ? (

                                            <div>
                                                <div className="children-count">
                                                    <span className="plan-heading">Choose a number<br /> of Children</span>&nbsp;

                                                    <div className="cart_box">
                                                        <div>

                                                            <select name="count" onChange={(e) => handleChildrenCountParent(e)}>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                                <option>6</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="maths-price">
                                                    {/* <button type="button" className="select-option sub-input">
                                                        <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">{type}</div>
                                                    </button> */}

                                                </div>

                                            </div>
                                        ) : (
                                            <>
                                                <div className="plan-heading sch-count">Choose a number<br /> of Children</div>
                                                {
                                                    schoolPackage.map((details, index) => (
                                                        <span className="school-count">
                                                            <button onClick={handleChildrensCountSchool} value={index}>{details.minimum_count} - {details.maximum_count}</button>
                                                        </span>
                                                    ))
                                                }
                                                <div className="maths-price">
                                                    {/* <span className="plan-heading">Choose desired Subjects</span> */}
                                                    {/* <button type="button" className="select-option sub-input"> */}
                                                    {/* <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div> */}
                                                    {/* <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">{type}</div> */}
                                                    {/* </button> */}
                                                </div>
                                            </>)
                                    }


                                    <hr />
                                    <span className="info-heading">Enter Your Details</span>
                                    <div className="reg-detail-part">
                                        <div className="name-part">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Enter your name"
                                                value={formValues.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <p className="text-danger">{formErrors.name}</p>

                                        <div className="email-part">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter Email id"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        {/* <p className="text-danger">{formErrors.email}</p> */}

                                        <div className="password-part">
                                            <label>Password</label>
                                            <input
                                                type={passwordShow ? "text" : "password"}
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={formValues.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span onClick={togglePassword}>
                                                {passwordShow ?
                                                    <FaEye /> : <FaEyeSlash />
                                                }
                                            </span>
                                        </div>
                                        <p className="text-danger">{formErrors.password}</p>
                                        <div className="country-part">
                                            <label>Country</label>
                                            <select name="countrycode" onChange={handleChange} required>
                                                <option>Select Your Country</option>
                                                {
                                                    counrtyinfo?.map((countrylist, i) => (
                                                        <option key={i} value={countrylist.id}>{countrylist.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className="phonenumber-part">
                                            <label>Phone Number</label>
                                            <input
                                                type="number"
                                                name="phonenumber"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Enter your Phone Number"
                                                value={formValues.phonenumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <p className="text-danger">{formErrors.phonenumber}</p>
                                    </div>


                                    <hr />
                                </div>

                                <div className="submit-btn">
                                    {/* <Link className="" to={"/home"}> */}
                                    <button className="kidzuni-btn">Join a Member</button>
                                    {/* </Link> */}

                                </div>
                            </form>
                        </div>

                    </div>



                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 plan-sec">
                        <div className="plan-selected">
                            <h4>Purchase Summary</h4>
                            <p>For-<b>{packagefor}</b></p>
                            <div className="membership-selected"><b>{type}</b> Membership</div>
                            <div className="child-count">{child_count} Child</div>
                            <div className="selected-amt">₹{inputValue}</div>
                            {packagefor === 'parent' ? (
                                <span className="addtional-amount">Additional price per kid:<strong>₹{additional_price}</strong></span>
                            ) : (<p></p>)}

                        </div>
                        <div className="join-benefit">
                            <h4>Benefits of Joining</h4>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit dui, dictum at blandit eget,
                                vulputate sed nisi.</p>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}