import React, {useState} from 'react'
import "./Main.css"
import { Scrollbars } from 'react-custom-scrollbars-2';
import background from "./bg.jpg";  
import Items from './Items';
import {Products} from "./Products"
function Main() {
    const [Item, setItem] = useState(Products);
    return (
        <>
       
        <section className="main">
        <div style={{ backgroundImage: `url(${background})` }} className="main-img">
            <div className="quote">
                 <h1>Taste that best, its on time</h1>
                 <p>Choose your favourite Burger from broad collection we provide.Straight out of the oven to your doorstep, Let deliciousness twirl in your mouth.</p>
            </div>
            </div>
        </section>


        <section className="productsection">
        <div className="product-items">
            <Scrollbars>
                {
                    Item.map((curItem)=>{
                        return <Items key={curItem.id}{...curItem}/>
                    })
                }
                
                 </Scrollbars>
            </div>
        </section>

    <footer className="footer">
      <p>
        <span >Project by </span>
        <span >Neha Das M K</span>
      </p>
    </footer>

        </>
    )
}

export default Main
