import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description </div>
        <br />
        <div className="descriptionbox-nav-box fade"> &nbsp; Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to JewelCart, your ultimate destination for exquisite jewelry for the whole family. Explore our diverse collection designed to captivate men, women, and kids alike, offering timeless elegance and modern flair for every age and style. From sophisticated pieces for him to graceful adornments for her and adorable jewelry for the little ones, our curated selection ensures that everyone finds something special. Discover the perfect blend of craftsmanship, quality, and style as you browse through our comprehensive range, making every moment shimmer with joy and beauty</p>
          <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
          </p>
      </div>
    </div>
  )
}

export default DescriptionBox
