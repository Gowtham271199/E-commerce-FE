import React, { useContext, useState,useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import drop_down from '../Assets/dropdown.png'

export const Navbar = () => {
    const[menu,setMenu]=useState('shop')
    const{getTotalCartItems}=useContext(ShopContext)
    const menuRef=useRef()
    const dropdown_toggle =(e)=>{
      menuRef.current.classList.toggle('nav-menu-vsible')
      e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt='navlogo'></img>
        <p>GTSHOPIFY</p>
        </div>
        <img onClick={dropdown_toggle} className ='nav-dropdown'style={{ width: '30px', height: '30px',marginTop:'8px', marginLeft:'18px', marginBottom:'10px'}} src={drop_down} alt="dropdown"></img>
            <ul ref={menuRef}className="nav-menu">
                <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('men')}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==='men'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('womens')}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
            </ul>

        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} >Logout</button>
          :<Link to='/login'> <button>Login</button></Link>}
           
            <Link to='/cart'><img src={cart_icon} alt='carticon'></img></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
