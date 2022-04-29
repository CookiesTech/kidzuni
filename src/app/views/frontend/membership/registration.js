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
import NavbarMenus from "../home/NavbarMenus";
import { config } from 'app/config';
toast.configure();
export default function Registration() {
    let packageservice = new PackageService();
    const [inputValue, setInputValue] = React.useState("");
    const [schoolPackage = [], setschoolPackage] = useState();
    const [packagefor, setPackageFor] = useState('parent');
    const [type, setType] = useState('monthly');
    const [showschool, setShowSchool] = useState(false)
    const [showParent, setShowParent] = useState(true)

    useEffect(() => {
        getMonthlyParentPackage();
        getSchoolStudentCount();


        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }

    }, [formErrors]);

    const getSchoolStudentCount = async () => {
        try {
            let data1 = { package_for: 'school', type: 'monthly' }
            const data = await packageservice.getallpackage(data1);

            setschoolPackage(data.data.data);

            // setInputValue(data.data.data[0].price);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getMonthlyParentPackage = async () => {
        try {

            let data1 = { package_for: packagefor, type: type }
            const data = await packageservice.getallpackage(data1);
            setAdditionalPrice(data.data.data[0].additional_price);
            //setPackagePrice(data.data.data);

            setInputValue(data.data.data[0].price);
        }
        catch (e) {
            console.log(e);
        }
    }

    const initialValues = { name: "", email: "", password: "", countrycode: "", phonenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [additional_price, setAdditionalPrice] = useState(0);
    const navigate = useNavigate();
    const [child_count, setChildCount] = useState(1)

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
            no_of_children: 1,
            type: "monthly",
            package_for: "parent",
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

    const handleChildrenCountParent = (e, index) => {
        e.preventDefault();
        let count = parseInt(e.target.value);
        let previous_price = inputValue;
        if (count > 1) {

            //let additional_price = parseInt(packageprice[index].additional_price);
            count = parseInt(count - 1);
            let newPrice = parseInt(count * additional_price);
            var n1 = parseInt(previous_price);
            var n2 = parseInt(newPrice);
            var ans = n1 + n2;
            setChildCount(e.target.value);
            setInputValue(ans);
        }
        else {
            setInputValue(previous_price);
        }
    }

    const handleTypeChange = async (e) => {

        let data1 = { package_for: packagefor, type: e.target.value }

        const data = await packageservice.getallpackage(data1);

        if (data.data.status) {
            if (packagefor === 'parent') {
                setAdditionalPrice(data.data.data[0].additional_price)
            }
            //setPackagePrice(data.data.data);
            setChildCount()
            setType(e.target.value)
            setInputValue(0);
        }

    }

    const handlePackageChange = (e) => {
        if (e.target.value === 'school') {
            setPackageFor('school')
            setInputValue(0)
            setChildCount(0);
            setType('')
            setShowParent(false)
            setShowSchool(true)

        } else if (e.target.value === 'parent') {
            setPackageFor('parent')
            setPackageFor(e.target.value)
            setInputValue(0)
            setAdditionalPrice(0)
            setShowSchool(false)
            setShowParent(true)
        }

    }
    const handleChildrensCountSchool = (e) => {

        e.preventDefault();
        setChildCount(schoolPackage[e.target.value].minimum_count + '-' + schoolPackage[e.target.value].maximum_count);
        setInputValue(schoolPackage[e.target.value].price)
    }
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
                                        <button type="button" style={packagefor == 'parent' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} name="package_for" value="parent" className="select-option sub-input " onClick={handlePackageChange}>
                                            Parent
                                        </button>
                                        <button type="button" style={packagefor == 'school' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} name="package_for" value="school" className="select-option sub-input" onClick={handlePackageChange}>
                                            School
                                        </button>
                                    </div>

                                    <div className="type-part">
                                        <span className="plan-heading">Choose a Type</span>
                                        <button type="button" name="type" style={type == 'monthly' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} value="monthly" className="select-option sub-input" onClick={handleTypeChange}>
                                            Monthly
                                        </button>
                                        <button type="button" name="type" style={type == 'annual' ? { color: '#000', boxShadow: 'rgb(189 184 184) 1px 1px 4px 4px' } : { color: '#fff' }} value="annual" className="select-option sub-input" onClick={handleTypeChange}>
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
                                                            {/* <input type="number" name="count" onChange={(e) => handleChildrenCountParent(e)}></input> */}
                                                            <select type="number" name="count" onChange={(e) => handleChildrenCountParent(e)}>
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

                                                    <button type="button" className="select-option sub-input">
                                                        <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">{type}</div>
                                                    </button>
                                                    <span className="addtional-amount">Additional price per kid:₹{additional_price}</span>
                                                </div>
                                                {/* {packageprice?.map((packagedetail, i) => (
                                                    <div className="maths-price">
                                                       
                                                        <button type="button" className="select-option sub-input">
                                                            <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                            <div className="productOption-term">{type}</div>
                                                        </button>
                                                        <span className="addtional-amount">additional price per kid:₹{packagedetail.additional_price}</span>
                                                    </div>
                                                ))} */}
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
                                                    <button type="button" className="select-option sub-input">
                                                        {/* <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div> */}
                                                        <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">{type}</div>
                                                    </button>
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
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                                value={formValues.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <p className="text-danger">{formErrors.password}</p>
                                        <div className="country-part">
                                            <label>Countrycode</label>
                                            {/* <input
                                                type="countrycode"
                                                name="countrycode"
                                                className="form-control"
                                                id="countrycode"
                                                placeholder="Enter your Countrycode"
                                                value={formValues.countrycode}
                                                onChange={handleChange}
                                                required
                                            /> */}

                                            <select name="countrycode" value={formValues.countrycode} onChange={handleChange} required>
                                                <option>Select</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
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