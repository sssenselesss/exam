import { useState } from "react";
import { NavLink } from "react-router-dom";



const Product = (props) =>{

    return (
        <NavLink   to={`single/${props.prod.id}`} className="product">
        <div className="prod-img">
            <img src={props.prod.image_url} alt="" />
        </div>

        <div className="prod-name">{props.prod.name}</div>
    </NavLink>
    )
}

export default Product;