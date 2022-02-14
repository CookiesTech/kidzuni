import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price } = item;
  return (
    <div className="cards">
      
      <div className="details">
        
      
         <button onClick={() => handleClick(item)}>Add to Cart</button> 
      </div>
      
    </div>
  );
};

export default Cards;
