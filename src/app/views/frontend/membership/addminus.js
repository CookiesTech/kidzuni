import React, { useState, useEffect } from "react";
import list from "./data";
import cart from "./cart"


const Add = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [eachprice, setEachprice] = useState(0);

  // const handleRemove = (id) => {
  //   const arr = cart.filter((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.eachprice));
    setPrice(ans);
    setEachprice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" >
          <div>
            <button type="button" onClick={() => handleChange(item, -1)}>{'<'}</button>
            <button>{item.amount}</button>
            <button type="button" onClick={() => handleChange(item, 1)}>{'>'}</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price : </span>
        <span>₹{1000 + eachprice} </span>
      </div>
      <div className="maths-price">
        <label>Choose desired subjects</label>
        <button type="button" className="select-option sub-input" data-value="MATH" tabindex="-1" placeholder="" id="">
          <div className="productOption-name">Maths</div><div className="productOption-tag" id="">LKG - XII</div>
          <div className="productOption-price"><span>₹{400 + eachprice} </span></div>
          <div className="productOption-term">per month</div>
        </button>
        <button type="button" className="select-option sub-input" data-value="MATH" tabindex="-1" placeholder="" id="">
          <div className="productOption-name">English</div><div className="productOption-tag" id="">LKG - XII</div>
          <div className="productOption-price"> <span>₹{200 + eachprice} </span></div>
          <div className="productOption-term">per month</div>
        </button>
      </div>
    </article>
  );
};

export default Add;
