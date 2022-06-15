import React from 'react';

interface params {
    greeting: string;
}

export const ItemListContainer = ({greeting} : params) => {
  return (
    <h1>{greeting}</h1>
  )
}
