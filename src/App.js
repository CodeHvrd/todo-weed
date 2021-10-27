import React, { useState } from 'react';
import { List } from './components/list';
import { Button } from './components/button';
import './App.css';

function App() {
  const [items, setItems] = useState(['item 1', 'item 2']); // [initialState, functionToChangeState]

  const addItem = () => {
    // filtrar items 
    // const newItems = items.filter( (a, index) =>  index === 0 ) // ['item 1']
    const newItems = [...items];
    newItems.push('item 3') //  3
    console.log(newItems);

    setItems(newItems);
  }

  return (
  <div className="app-container">
    <List items={items} />
    <div className="button-container">
      <Button onClick={addItem} content="+"/>
    </div>
  </div>
  );
}

export default App;

