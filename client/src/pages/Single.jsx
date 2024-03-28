import React from 'react'
import Edit from '../img/edit.png'
import Delet from '../img/delet.png'
import Alaa from '../img/alaaeidfoto.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">  
      <img src="https://placehold.co/1024x700/png" alt="" />

      <div className="user">
      <img src={Alaa} alt="" />
      <div className="edit" > 
      <Link to={`/write?edit=2`}>
      <img src={Edit} alt=''/>
      </Link>
        <img src={Delet} alt=''/>
      </div>
      </div>
      <div className="info">
        <span>Alaa EID</span>
        <p>Posted 2 days ago</p>
      </div>
     <h1>icia saepe ex reprehenas, quam tempanimi, fugiat at.</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur dolore sapiente illo corrupti voluptatibus necessitatibus atque sit fuga quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci quibusdam dolor maiores ab ratione amet impedit reprehenderit doloribus quae. Architecto ut autem cupiditate obcaecati voluptate laborum reiciendis dicta aliquid eos labore numquam beatae, nulla fugiat 
      placeat illo rerum iste assumenda in sit quo, aperiam eligendi
       ad magni! Corrupti quam enim mollitia tenetur voluptas, fugit nostrum 
       quod quis! Recusandae, aspernatur? Quod et libero officiis.
        Necessitatibus a debitis tempore suscipit, saepe nihil cum l
        aboriosam quos iste atque. Eligendi labore enim magnam vel ill
        o rem fugit tempora numquam qui, voluptatum aspernatu
        r quam repudiandae. Ab quod exercitat
        ionem sunt doloremque dolores rep
        rehenderit. Praesentium quia provident voluptates ne
        sciunt minima voluptate quas ipsum simili
        que quam doloremque saepe ad inventore culpa paria
        tur, fugit, excepturi consectetur repellat sapiente asperiores soluta nisi, numquam illum omnis eius? Eligendi dignissimos, sed, sit vel quis ea in id libero ut blanditiis asperiores nemo ipsam veritatis. Vero nam eveniet esse id itaque velit in neque illo. Blanditiis nihil unde cupiditate, officiis laboriosam modi earum recusandae rem asperiores quae accusamus repellat temporibus ea deleniti similique reiciendis voluptatibus perferendis omnis odit voluptas voluptate! Enim quas pariatur obcaecati. Animi corrupti totam amet esse temporibus eius sapiente recusandae. Pariatur blanditiis excepturi amet quia vel dignissimos magnam distinctio.</p>
        <br/>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur dolore sapiente illo corrupti voluptatibus necessitatibus atque sit fuga quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, adipisci quibusdam dolor maiores ab ratione amet impedit reprehenderit doloribus quae. Architecto ut autem cupiditate obcaecati voluptate laborum reiciendis dicta aliquid eos labore numquam beatae, nulla fugiat 
      placeat illo rerum iste assumenda in sit quo, aperiam eligendi
       ad magni! Corrupti quam enim mollitia tenetur voluptas, fugit nostrum 
       quod quis! Recusandae, aspernatur? Quod et libero officiis.
        Necessitatibus a debitis tempore suscipit, saepe nihil cum l
        aboriosam quos iste atque. Eligendi labore enim magnam vel ill
        o rem fugit tempora numquam qui, voluptatum aspernatu
        r quam repudiandae. Ab quod exercitat
        ionem sunt doloremque dolores rep
        rehenderit. Praesentium quia provident voluptates ne
        sciunt minima voluptate quas ipsum simili
        que quam doloremque saepe ad inventore culpa paria
        tur, fugit, excepturi consectetur repellat sapiente asperiores soluta nisi, numquam illum omnis eius? Eligendi dignissimos, sed, sit vel quis ea in id libero ut blanditiis asperiores nemo ipsam veritatis. Vero nam eveniet esse id itaque velit in neque illo. Blanditiis nihil unde cupiditate, officiis laboriosam modi earum recusandae rem asperiores quae accusamus repellat temporibus ea deleniti similique reiciendis voluptatibus perferendis omnis odit voluptas voluptate! Enim quas pariatur obcaecati. Animi corrupti totam amet esse temporibus eius sapiente recusandae. Pariatur blanditiis excepturi amet quia vel dignissimos magnam distinctio.</p>
</div>
     <Menu/>            

    </div>
  )
}

export default Single
