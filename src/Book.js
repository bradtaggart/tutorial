import React from 'react';

const Book = ({img, title, author}) => {
  const clickHandler= () => {
    alert('hello github');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return <article className='book' onMouseOver={()=>{
    console.log(title)
  }}>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>
      example
    </button>
    <button type="button" onClick={() => complexExample(author)}>example</button>
  </article>
}

export default Book;