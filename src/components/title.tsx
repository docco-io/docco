import React, { useEffect, useState } from 'react';
import Card from './card';

export interface Props {
  title: string;
}

function Title({ title }: Props) {
  const [internalTitle, setTitle] = useState(title);

  useEffect(() => {
    console.log('Incoming title: ', title);
  }, [title]);

  return (
    <div>
      <input
        data-testid='input-card-title'
        onChange={(e) => setTitle(e.target.value)}
        value={internalTitle}
      />
      <h2>{internalTitle}</h2>
      <p>This is a lorem ipsum description...</p>
      <Card title={internalTitle} />
    </div>
  );
}

export default Title;
