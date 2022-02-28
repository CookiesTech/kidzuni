import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../home/navbar"
import Cart from "./cart"
import Footer from "../home/footer"
import { register } from "serviceWorker";

export default function Registration() {

    const [counter, setCounter] = useState()
    const [cart, setcart] = useState([]);

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setData({
    //     ...data,
    //     [name]: value,
    //     });
    // };
    // const decrement = () => {
    //     if (counter <= 1) {
    //         return;
    //     } else {
    //         setCounter(counter - 1);
    //     }
    // }
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    const initialValues = { name: "", email: "", password: "", phonenumber: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
   
    const [isSubmit, setIsSubmit] = useState(false);


   
    // async function membership() {
            
    //     let item = {username,password,email,phonenumber}
    //     console.log(item);

    //    let result=await fetch("http://feltech.in/kidzuni_backend/public/api/register",{
    //         method:"POST",  
    //         body:JSON.stringify(item),
    //         headers:{
    //             "Content-Type":'application/json',  
    //             "Accept":'application/json'
    //         }
            
    //     })
      
    //     result =await result.json()
    //     localStorage.setItem("user-info",JSON.stringify(result))
    // }




      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(name); return false;
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // const data = { 
        //     email: e.email,
        //     name: e.name,
        //     phonenumber: e.phonenumber,
        //     password: e.password
        //  }  
        axios.post('http://feltech.in/kidzuni_backend/public/api/register', { email: e.formValues, password: e.formValues })
        .then(response => {
            console.log(response);
       
        //   setUserSession(response.data.token, response.data.user);
        //   props.history.push('/dashboard');
        }).catch(error => {

           
      
        // if (error.response.status === 401) setError(error.response.data.message);
        // else setError("Something went wrong. Please try again later.");
        });
      };
    
      useEffect(() => {
        console.log(formErrors);

        
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
        
      }, [formErrors]);


      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "name is required!";
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
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="member-part">
                            {Object.keys(formErrors).length === 0 && isSubmit ? (
                                <div className="ui message success">Signed in successfully</div>
                            ):(
                                <p></p>
                            )}
                        <form onSubmit={handleSubmit}  autoComplete="off"> 
                            <h4>Become a Member</h4>
                            <div className="teaching">
                                <img src="assets/frontend/images/teaching.png" alt="teach" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit dui, dictum at blandit eget,
                                    vulputate sed nisi. Sed auctor volutpat turpis, eu egestas ligula. Cras justo ligula, consectetur,
                                    cursus viverra diam.
                                </p>
                            </div>
                            <hr />
                            {/* <div className="choose-plan">
                                <label>Choose a Plan</label>&nbsp;
                                <button className="choose-option">Month</button>
                                <button className="choose-option">Annual</button>
                            </div>
                            <hr /> */}

                            {/* <hr /> */}

                            <div className="register-info-detail">
                                <span className="info-heading">Enter Your Details</span>
                               
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
                                  <p className="text-danger">{formErrors.email}</p>
                               
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
                                
                                <hr />
                            </div>
                            <div className="children-count">
                                <span className="plan-heading">Choose a number<br /> of Children</span>&nbsp;
                                {/* <Cart />  */}
                                <div className="cart_box">
                                    <div>
                                        <button className="left-btn" >{'<'}</button>
                                        {/* <span>{counter}</span> */}
                                        <input type="number"></input>
                                        <button className="right-btn" >{'>'}</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="maths-price">
                                <span className="plan-heading">Choose desired Subjects</span>
                                <button type="button" className="select-option sub-input" 
                                    data-value="MATH" tabindex="-1" placeholder="" id="">
                                    <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div>
                                    <div className="productOption-price"><span>₹449 </span></div>
                                    <div className="productOption-term">per month</div>
                                </button>
                                {/* <button type="button" className="select-option sub-input" data-value="MATH" tabindex="-1" placeholder="" id="">
                                        <div className="productOption-name">English</div><div className="productOption-tag" id="">LKG - XII</div>
                                        <div className="productOption-price"> <span>₹449 </span></div>
                                        <div className="productOption-term">per month</div>
                                    </button> */}
                            </div>
                            <div className="submit-btn">
                                <button className="kidzuni-btn">Join a Member</button>
                            </div>
                         </form>   
                        </div>
                        
                    </div>

                     

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 plan-sec">
                        <div className="plan-selected">
                            <h4>Purchase Summary</h4>
                            <div className="membership-selected">Monthly Membership</div>
                            <div className="child-count">1 Child</div>
                            <div className="selected-amt">₹449</div>
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