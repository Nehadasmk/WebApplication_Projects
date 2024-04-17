import React, {useState} from 'react'
import { FaShoppingCart,FaTimes,FaRupeeSign,FaPlus,FaMinus} from 'react-icons/fa'
import Modal from 'react-modal'
import './Header.css'
const Header = () => {
    const [modalIsOpen,setModalIsOpen]=useState(false)
    return (
        <>
        <header className="nabar">
                    <div className="logo">
                        <h3>BurgerTree</h3>
                    </div>
                    <div className="cart">
                        <button onClick={() =>setModalIsOpen(true)} className="cart-button">
                            <FaShoppingCart className="cart-icon"/>
                            <span className="cart-value">3</span>
                         </button>
                            <Modal isOpen={modalIsOpen}>
                                <div className="CartModal">
                                <button onClick={() =>setModalIsOpen(false)} className="cart-button"><FaTimes/></button>
                                
                                     <div className="cart-section">
                                        <h2 className="cart-name">Cart</h2>
                                        <div className="cart-list">

                                            <div className="basket-items">
                                                    <div className="title">
                                                        <h4>Spicy Zinger Burger</h4>
                                                     </div>

                                                <div className="plus-minus">
                                                    <FaPlus className="plus"/>
                                                     <input type="number" placeholder="1" className="cart-input"></input>
                                                    <FaMinus className="minus"/>
                                                </div>

                                                <div className="cart-price" >
                                                     <h3><FaRupeeSign/>700</h3>
                                                </div>
                                            </div>
                                            <div className="basket-items">
                                                    <div className="title">
                                                        <h4>Peri Peri Chicken Burger</h4>
                                                     </div>

                                                <div className="plus-minus">
                                                    <FaPlus className="plus"/>
                                                     <input type="number" placeholder="1" className="cart-input"></input>
                                                    <FaMinus className="minus"/>
                                                </div>

                                                <div className="cart-price" >
                                                     <h3><FaRupeeSign/>700</h3>
                                                </div>
                                            </div>
                                            <div className="basket-items">
                                                    <div className="title">
                                                        <h4>Brooklyn Chicken Burger</h4>
                                                     </div>

                                                <div className="plus-minus">
                                                    <FaPlus className="plus"/>
                                                     <input type="number" placeholder="1" className="cart-input"></input>
                                                    <FaMinus className="minus"/>
                                                </div>

                                                <div className="cart-price" >
                                                     <h3><FaRupeeSign/>700</h3>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="basket-total">
                                                 <p>Subtotal</p>
                                                 <span className="cart-total"><FaRupeeSign />2100</span>
                                            </div>
                                            <div className="checkout-button">
                                                    <button className="checkout"> Checkout</button>
                                            </div>
                                    </div>

                                </div>
                            </Modal>
                    </div>
       </header>
        </>
    )
}

export default Header
