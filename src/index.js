import React from 'react';
import ReactDOM from 'react-dom';

const Hi = ({ name }) => <div>Hello { name }!</div>;

function MediaCard( props ) {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} />
    </>
  );
}

const card = {
  title:  'Title',
  body: 'I hope you enjoy learning React!',
  imageUrl: 'https://placekitten.com/g/64/64'
};

// ReactDOM.render(<Hi name= "Dave" />, document.querySelector('#root'));

ReactDOM.render(
  <MediaCard {...card}/>,
   document.querySelector('#root')
);