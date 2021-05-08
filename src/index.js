import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import "./index.css";


ReactDOM.render(
  <>
  <h1 className="heading_style">List of My favorite Netflix Series to binge watch :-)</h1>
    <Cards
      imgsrc="https://images-na.ssl-images-amazon.com/images/I/71aaFdHcAwL._AC_SL1481_.jpg "
      title="A Netflix Original Series"
      sname='The Haunting BLY MANOR'
      link="https://www.netflix.com/in/title/81237854" />

    <Cards
      imgsrc="https://images-na.ssl-images-amazon.com/images/I/61boFr6SYZL._AC_SL1000_.jpg "
      title="A Netflix Original Series"
      sname='Money Heist'
      link="https://www.netflix.com/in/title/80192098"
    />

    <Cards
      imgsrc="https://www.tjtoday.org/wp-content/uploads/2018/02/c245fb206fecea20e4f18e26dc8fa74aae6f80b5.jpg "
      title="A Netflix Original Series"
      sname='DARK'
      link="https://www.netflix.com/title/80100172"
    />

    <Cards
      imgsrc="https://images-na.ssl-images-amazon.com/images/I/31VQ7OL1L1L._AC_.jpg"
      title="A Netflix Original Series"
      sname='13 Reasons Why'
      link="https://www.netflix.com/in/title/80117470"
    />

    <Cards
      imgsrc="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
      title="A Netflix Original Series"
      sname='Stranger Things'
      link="https://www.netflix.com/in/title/80057281"
    />

  </>
  , document.getElementById('root')
);

