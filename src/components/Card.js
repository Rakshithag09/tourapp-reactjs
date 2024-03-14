import React from "react";
import {toast} from "react-toastify";
const Card = ({id , name, info, image, price})=>{
    const bookingHandler=(id)=>{
        console.log("booked",id); 
        toast.success("Booked!")
        toast.info("booked")
    }
    return(
        <div className="card">
            <img src={image} className="image" alt='error' ></img>
            <div className="tour-details">
                <h2 className="tour-price">{price}</h2>
                <h2 className="tour-name">{name}</h2>
                </div> 
                <div className="description">
                    {info}
                </div>

                <button className="btn-red" onClick={()=>bookingHandler(id)}>
                    Book now
                </button>
            </div>
    );
};
export default Card;
