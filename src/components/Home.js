import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Add-Cart-icon.png"alt="" />
      </div>
      <h1> Home Component </h1>
      <div className="cart-wrapper">
        <div className='img-wrapper item'>
          <img src="https://banner2.cleanpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg"alt="" />
        </div>
        <div className='text-wrapper item'>
         <span>
           I-Phone
         </span>
         <span>
           Price: $1000.00
         </span>
        </div>
        <div className='btn-wrapper item'>
         <button>Add To Cart</button>
        </div>
      </div>
      
      </div>
  )
}

export default Home