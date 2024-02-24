import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_image from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

 const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
      </div>
      <div className="shopcategory-sort">
        sort by <img src={dropdown_image} alt="" />
   </div>
   <div className="shopcategory-products">
   {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} image={item.image} new_price ={item.new_price} old_price={item.old_price} />;
          }
          return null; // Need to include a return statement for the map function
        })}

   </div>

   <div className="shopcategory-loadmore">
    Explore More
   </div>


      

    </div>

  )
}

export default Shopcategory