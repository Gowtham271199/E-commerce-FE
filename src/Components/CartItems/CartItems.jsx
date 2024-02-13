import React,{useContext} from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

import {ShopContext}from '../../Context/ShopContext'
export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
            all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img className ='carticons-product-icon' src={e.image}  alt='carticons-product'></img>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img className ='cartitems-remove-icon' src={remove_icon} alt="remove_icon"onClick={()=>{removeFromCart(e.id)}}></img>
                    </div>
                    <hr/>
                    </div>
                }
                return (null)
            })
        }
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>Iy you have a promo code , Enter it here</p>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='Promo code'></input>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
