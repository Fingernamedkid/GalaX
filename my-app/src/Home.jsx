import React from 'react';
import items from './data.json';
export default function Home() {
    return (
      <div>
        <h1>Hello React.</h1>
        <h2>Start editing to see some magic happen!</h2>
        {items.map(item => (
          <div key={item.id} className="row">
            <a href={`/item/${item.id}`} className="box">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    );
  }