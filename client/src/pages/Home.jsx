import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" kay={post.id}>
            <div className='img'>
              <img src={post.img}/>
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
         </div>

      

    </div>
  )
}

export default Home
