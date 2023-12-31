import React from "react";
import FormatePrice from "./FormatePrice";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/CartContext";
import QuantityToggle from "./QuantityToggle";

const CartItem = ({ id, name, color, image, quantity, price }) => {
    const {removeItem,increment,decrement}=useCartContext()
  return (
    <div className="cart-item">
      <div className="item-section img-section">
        <figure >
          <img src={image} alt={name} />
        </figure>
        <div className="item-written">
          <p>{name}</p>
          <p>
            Color:<span style={{ backgroundColor: color }}></span>
          </p>
        </div>
      </div>
      <div className="item-section cart-hide">
        <FormatePrice price={price} />
      </div>
      <div className="item-section">
        <QuantityToggle quantity={quantity} Increment={()=>increment(id)} Decrement={()=>decrement(id)}/>
      </div>
      <div className="item-section">
        <FormatePrice price={price * quantity} />
      </div>
      <div className="item-section">
        <MdDelete className="remove-item" onClick={()=>removeItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
