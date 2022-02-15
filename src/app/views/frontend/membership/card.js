import React from "react";
// import Cart from "./cart"

const Cards = ({ item, handleClick }) => {
 
  return ( 
    <div className="cards">
      <div className="details">
        <button onClick={() => handleClick(item)}>Add</button> 
      </div>
    </div>
  );
};

export default Cards;

