import React from 'react'
import './NewCollections.css'
import newcollection from '../Assets/new_collections'
import Item from '../Item/Item'

 const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {
                newcollection.map((item,i)=>{
                    return <Item key= {i} id={item.id}  image={item.image} desc={item.desc} />

                })
            }
        </div>


    </div>
  )
}

export default NewCollections