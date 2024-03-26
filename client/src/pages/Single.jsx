import React from 'react'
import Edit from '../img/edit.png'
import Delet from '../img/delet.png'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">  
      <img src="https://placehold.co/1024x700/png" alt="" />
      <div className="user">
      <img src="https://placehold.co/200x400/png" alt="" />
      <div className="edit" to={`/write?edit=2`}>
        <img src={Edit} alt=''/>
        <img src={Delet} alt=''/>
      </div>
      </div>
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
     
</div>
      <div className="menu">m</div>
            

    </div>
  )
}

export default Single
