import React from 'react';
import ReactDOM from 'react-dom';

function Gate ({ isOpen }) {
  return (
    <>
      {isOpen ? <p>Open</p> : <p>Close</p>}
    </>
  )
}

function MediaCard( props ) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} />
      <Gate isOpen={props.isOpen} />
    </>
  );
}

const card = {
  title: 'Title',
  body: ["I hope you enjoy learning ", <strong>React</strong>,  "!"],
  imageUrl: 'https://placekitten.com/g/64/64',
  isOpen: true
};

ReactDOM.render(
  <MediaCard {...card}/>,
   document.querySelector('#root')
);