import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez le thème snow

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value);
  return (
    <div className='add'>
       <div className="content">
         <input type='text' placeholder='title'/>
         <div className="editorContainer">
           {/* Utilisez le thème snow ici */}
           <ReactQuill className="editors" theme='snow' value={value} onChange={setValue}></ReactQuill>
         </div>
       </div>
       <div className="menu">
         <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status</b> Draft
          </span>
          <span>
            <b>Visiblity</b> Public
          </span>
          <input style={{display:"none"}} type="file" id="file"/>
          <label htmlFor="file"> Upload Image</label>

          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
         </div>
         <div className="item">

        <h1>Category</h1>
        
        <input type="radio" name="cat" value="art" id="art"/>
        <label htmlFor="art">ART</label>
        <br/>
        <input type="radio" name="cat" value="science" id="science"/>
        <label htmlFor="science">SCIENCE</label>
        <br/>
        <input type="radio" name="cat" value="technology" id="technology"/>
        <label htmlFor="technology">TECHNOLOGY</label>
        <br/>
        <input type="radio" name="cat" value="cinema" id="cinema"/>
        <label htmlFor="cinema">CINEMA</label>
        <br/>
        <input type="radio" name="design" value="design" id="design"/>
        <label htmlFor="design">DESIGN</label>
        <br/>
        <input type="radio" name="cat" value="food" id="food"/>
        <label htmlFor="food">FOOD</label>

         </div>
       </div>
    </div>
  );
}

export default Write;
