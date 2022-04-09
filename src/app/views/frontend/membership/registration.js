import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../home/navbar";
import Footer from "../home/footer";
import PackageService from "../Services/PackageService"
import NavbarMenus from "../home/NavbarMenus";

toast.configure();
export default function Registration() {
    let packageservice = new PackageService();
    const [inputValue, setInputValue] = React.useState("");
    const [packageprice, setPackagePrice] = useState();
    const [schoolPackage = [], setschoolPackage] = useState();
    const [packagefor, setPackageFor] = useState('parent');
    const [type, setType] = useState('monthly');
    const [showschool, setShowSchool] = useState(false)
    const [showParent, setShowParent] = useState(true)

    useEffect(() => {
        getallpackage();
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

    const getallpackage = async () => {    //subject List
        try {
            let data1 = { package_for: packagefor, type: type }
            const data = await packageservice.getallpackage(data1);

            setPackagePrice(data.data.data);

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
    const navigate = useNavigate();

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
            countrycode: formValues.countrycode,
            no_of_children: 1,
            type: "monthly",
            package_for: "parent",
            price: inputValue,
        };

        const result = await axios.post(
            "http://feltech.in/kidzuni_backend/public/api/register",
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
        let count = parseInt(e.target.value);
        let previous_price = packageprice[index].price;
        if (count > 1) {
            let additional_price = parseInt(packageprice[index].additional_price);
            count = parseInt(count - 1);
            let newPrice = parseInt(count * additional_price);
            var n1 = parseInt(previous_price);
            var n2 = parseInt(newPrice);
            var ans = n1 + n2;

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
            setPackagePrice(data.data.data);
            setType(e.target.value)
            setInputValue(data.data.data[0].price);
        }

    }

    const handlePackageChange = (e) => {
        if (e.target.value === 'school') {
            setInputValue(schoolPackage[0].price)
            setShowSchool(true)
            setShowParent(false)
        } else {
            setInputValue(packageprice[0].price)
            setShowSchool(false)
            setShowParent(true)
        }
        setPackageFor(e.target.value)
    }
    const handleChildrensCountSchool = (e) => {
        e.preventDefault();

        setInputValue(schoolPackage[e.target.value].price)
    }
    return (
        <div>
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
                                    <span className="info-heading">Enter Your Details</span>
                                    <div className="plan-part">
                                        <span className="plan-heading">Package For</span>
                                        <button type="button" name="package_for" value="parent" className="select-option sub-input" onClick={handlePackageChange}>
                                            Parent
                                        </button>
                                        <button type="button" name="package_for" value="school" className="select-option sub-input" onClick={handlePackageChange}>
                                            School
                                        </button>
                                    </div>

                                    <div className="type-part">
                                        <span className="plan-heading">Choose a Type</span>
                                        <button type="button" name="type" value="monthly" className="select-option sub-input" onClick={handleTypeChange}>
                                            Monthly
                                        </button>
                                        <button type="button" name="type" value="annual" className="select-option sub-input" onClick={handleTypeChange}>
                                            Annual
                                        </button>
                                    </div>

                                    {showParent &&
                                        packageprice?.map((packagedetail, i) => (
                                            <div>
                                                <div className="children-count">
                                                    <span className="plan-heading">Choose a number<br /> of Children</span>&nbsp;

                                                    <div className="cart_box">
                                                        <div>
                                                            <input type="number" name="count" onChange={(e) => handleChildrenCountParent(e, i)}></input>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="maths-price">
                                                    <span className="plan-heading">Choose desired Subjects</span>
                                                    <button type="button" className="select-option sub-input"
                                                        data-value="MATH" tabindex="-1" placeholder="" id="">
                                                        {/* <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div> */}
                                                        <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">per month</div>
                                                    </button>
                                                    <span className="addtional-amount">adiitional price per kid:₹{packagedetail.additional_price}</span>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    {
                                        showschool && (
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
                                                    <span className="plan-heading">Choose desired Subjects</span>
                                                    <button type="button" className="select-option sub-input"
                                                        data-value="MATH" tabindex="-1" placeholder="" id="">
                                                        {/* <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div> */}
                                                        <div className="productOption-price"><span>₹{inputValue} </span></div>
                                                        <div className="productOption-term">per month</div>
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    <hr />
                                    <div className="reg-detail-part">
                                        <div className="name-part">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                class="form-control"
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
                                                class="form-control"
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
                                                class="form-control"
                                                placeholder="Password"
                                                value={formValues.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <p className="text-danger">{formErrors.password}</p>
                                        <div className="country-part">
                                            <label>Countrycode</label>
                                            <input
                                                type="countrycode"
                                                name="countrycode"
                                                class="form-control"
                                                id="countrycode"
                                                placeholder="Enter your Countrycode"
                                                value={formValues.countrycode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="phonenumber-part">
                                            <label>Phone Number</label>
                                            <input
                                                type="number"
                                                name="phonenumber"
                                                class="form-control"
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
                            <div className="membership-selected">Monthly Membership</div>
                            <div className="child-count">1 Child</div>
                            <div className="selected-amt">₹{inputValue}</div>
                        </div>
                        {/* <hr /> */}
                        <div className="join-benefit">
                            <h4>Benefits of Joining</h4>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit dui, dictum at blandit eget,
                                vulputate sed nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}