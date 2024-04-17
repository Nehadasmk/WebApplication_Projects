import React from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import './Items.css'
export const Items = ({description, title, img, price}) => {
    return (
        <>
            <div className="product-items-container">
                    <div className="items-info">
                        <div className="product-img">
                            <img src={img}></img>
                        </div>
                        <div className="title">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
            
                        <div className="price" >
                            <h3><FaRupeeSign/>{price}</h3>
                        </div>
                        <div className="add-item">
                           <button > ADD </button>
                        </div>
                    </div>
                    <hr/> 
            </div>
        </>
    )
}
export default Items