import React from "react";
import { useState } from "react";
import Navbar from "../home/navbar"
import Cart from "./cart"
import Footer from "../home/footer"

export default function Registration() {

    const [counter, setCounter] = useState(1)
    const [cart, setcart] = useState([]);

    const [input, setInput] = useState();
    // const [data, setData] = useState({ type: "register" });
    const inputChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };
    console.log(input);

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

    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="member-part">
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
                                        type="name"
                                        name="name"
                                        class="form-control"
                                        id="name"
                                        placeholder="Enter your Name"
                                        onChange={inputChange}
                                        required
                                    />
                                </div>
                                <div className="email-part">
                                    <label>Email</label>
                                    <input
                                        autoComplete="off"
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        id="email"
                                        placeholder="Enter Email id"
                                        onChange={inputChange}
                                        required
                                    />
                                </div>
                                <div className="password-part">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        onChange={inputChange}
                                        required
                                    />
                                </div>
                                <div className="phonenumber-part">
                                    <label>Phone Number</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        class="form-control"
                                        id="phone"
                                        placeholder="Enter your Phone Number"
                                        onChange={inputChange}
                                        required
                                    />
                                </div>

                                <hr />
                            </div>
                            <div className="children-count">
                                <span className="plan-heading">Choose a number<br /> of Children</span>&nbsp;
                                {/* <Cart />  */}
                                <div className="cart_box">
                                    <div>
                                        <button className="left-btn" >{'<'}</button>
                                        <span>{counter}</span>
                                        <button className="right-btn" >{'>'}</button>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="maths-price">
                                <span className="plan-heading">Choose desired Subjects</span>
                                <button type="button" className="select-option sub-input" data-value="MATH" tabindex="-1" placeholder="" id="">
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
                <div className="submit-btn">
                    <button className="kidzuni-btn" >
                        Join a Member
                    </button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
