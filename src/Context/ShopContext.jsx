import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import Product from "../pages/Product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;

}




const ShopContextProvider = (props) => {
    const [CartItems,setCartItems]= useState(getDefaultCart());

     const addTocart= (itemId) =>  {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId]+1})
        )

     }
     const RemoveFromcart= (itemId) =>  {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId]-1})
        )

     }
     const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
          if (CartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += CartItems[item] * itemInfo.new_price;
          }
        }
        return totalAmount;
      }

      const getTotalCartItems = () => {
        let totalItem =0;
        for(const item in CartItems){
            if(CartItems[item]>0){
                totalItem+=CartItems[item];
            }
        }
        return totalItem;

      }


     const contexValue = {getTotalCartItems,getTotalCartAmount, all_product, CartItems,addTocart,RemoveFromcart};

    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider
