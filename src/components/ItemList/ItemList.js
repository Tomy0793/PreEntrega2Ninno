import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'
const ItemList = ({item}) => {
  
  return (
    <div className='row' id='itemList'>
      {item.map(i =>
        <div className='col-md-3' key={i.id}>
        <Item item= {i} />
        </div>
        )}
     

    </div>

  ) 
}
 
export default ItemList