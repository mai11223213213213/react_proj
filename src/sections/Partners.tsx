import React from 'react'
import brand3 from "../assets/img/binance.svg"
import brand4 from "../assets/img/bitmex.svg"
import brand2 from "../assets/img/blockchain.svg"
import brand1 from "../assets/img/coinbase.svg"


const brands = [
    {
        path:brand1,
        alt:"coinbase"
    },
    {
        path:brand2,
        alt:"blockchain"
    },
    {
        path:brand3,
        alt:"binance"
    },
    {
        path:brand4,
        alt:"bitmex"
    },
    
]
const Partners = () => {
  return (
   
    <section className='partners'> 
        <div className="brands">
            {brands.map((brand) => (<img src={brand.path} alt={brand.alt} className='brand'/>))}
            </div>
    
    </section>
  )
}

export default Partners