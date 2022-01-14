import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function updateState(){
    setInCart((inCart)=> !inCart)

   

    
  }
  const classState = inCart ? "in-cart" : "";
  const cartText = inCart ? "Remove from Cart" : "Add to Cart";
  const color = inCart ? "pink" : null ;

  return (
    <li className="classState">
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add">Add to Cart</button> */}
      <button className="add" style={{background: color}} onClick={updateState}>{cartText}</button>
    </li>
  );
}

export default Item;
