import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box"> Description</div>
            <div className="description-nav-box fade"> Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
 An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the Internet.
 It serves as a virtual marketplace where businesses and consumers can engage in various commercial transactions
 E-commerce websites showcase a wide range of products or services with detailed descriptions, images, and pricing information.</p>
 <p>E-commerce websites integrate secure payment gateways to facilitate online transactions. 
Common payment methods include credit cards, digital wallets, and other electronic payment options.
E-commerce platforms implement robust security measures to protect user data and financial transactions. 
This includes SSL certificates, secure payment gateways, and compliance with data protection regulations.</p>
        </div>
    </div>
  )
}
