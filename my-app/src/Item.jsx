import React from 'react';
import {useParams} from 'react-router-dom';
import items from './data.json';

export default function Item() {
  const {itemId} = useParams();
  const selectedItem = items.find(item => item.id === parseInt(itemId));

  return (
    <div>
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.genre}</p>
      <p>Year: {selectedItem.year}</p>
    
    </div>
  );
}