import React from 'react';

export interface Props {
  title: string;
}

function Card(props: Props) {
  return (
    <div style={{ background: 'green' }}>
      <h1>{props.title}</h1>
      <p>bla bla bla bla</p>
    </div>
  );
}

export default Card;
