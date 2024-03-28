import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const posts = [
        {
          id:1,
          title:"alaa rmjfg dfjsfhof ffsrfze jhzei grzlkef sgty tgrrzr srysr ",
          desc: "Lorem ipsum dolor sit amet conseLorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.ctetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.",
          img:"https://placehold.co/400x600/png",
        },
        {
          id:2,
          title:"alaa rmjfg dfjsfhof ffsrfze jhzei grzlkef sgty tgrrzr srysr ",
          desc: "Lorem ipsum doloLorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.r sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.",
          img:"https://placehold.co/400x600/png",
        },
        {
          id:3,
          title:"alaa rmjfg dfjsfhof ffsrfze jhzei grzlkef sgty tgrrzr srysr ",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.",
          img:"https://placehold.co/400x600/png",
        },
        {
          id:4,
          title:"alaa rmjfg dfjsfhof ffsrfze jhzei grzlkef sgty tgrrzr srysr ",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore, hic obcaecati perspiciatis id beatae ratione, harum praesentium laborum molestiae consectetur odio enim. Dicta, distinctio.",
          img:"https://placehold.co/400x600/png",
        },
      ]
  return (
    <div className='menu'>
        <h1> Other posts you my like</h1>

        {posts.map(post=>(
          <div className="post" kay={post.id}>
              <img src={post.img}/>
              <h1>{post.title}</h1>
              <button>Read More</button>
          
          </div>
        ))}
      
    </div>
  )
}

export default Menu
