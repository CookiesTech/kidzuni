import React from "react";
import { useState } from "react";
import Navbar from "../home/navbar"
import Cart from "./cart"
import Footer from "../home/footer"

export default function Registration() {

    const [counter, setCounter] = useState(1)

    const [cart, setcart] = useState([]);


    const decrement = () => {
        if (counter <= 1) {

            return;
        } else {
            setCounter(counter - 1);
        }
    }


    const increment = () => {
        setCounter(counter + 1)
    }



    return (
        <div>
            <div className="container">
                <Navbar />
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="member-part">
                            <h4>Become a Member</h4>
                            <div className="teaching">
                                <img src="assets/frontend/images/teaching.png" alt="teach"/>
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
                            {/* <div className="children-count">
                                <label>Choose a number<br /> of Children</label>&nbsp;
                                <Cart /> 
                               
                            </div> */}
                            {/* <hr /> */}
                            <div className="maths-price">
                                <label>Choose desired <br />Subjects</label>
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

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        wee
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}
