import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

 export const Breadcrum = (props) => {
    const {product}=props
    console.log(product)
    // return (
  //     <div className='breadcrum'>
  //       HOME <img src={arrow_icon} alt='' /> SHOP{' '}
  //       {product && product.category && (
  //         <>
  //           <img src={arrow_icon} alt='' />
  //           {product.category}
  //         </>
  //       )}
  //       {product && product.name && (
  //         <>
  //           <img src={arrow_icon} alt='' />
  //           {product.name}
  //         </>
  //       )}
  //     </div>
  //   );
  // };
  return (
    <div className='breadcrum'>
        
        HOME <img src={arrow_icon} alt='arrow'/> SHOP <img src={arrow_icon} alt="arrow"/>{product.category}<img src={arrow_icon} alt="arrow" />{product.name} 
        </div>
  )
}
export default Breadcrum