import React, { useState } from 'react';
import { List } from './components/list';
import { Button } from './components/button';
import './App.css';

function App() {
  const [items, setItems] = useState([{ color: 'lightGreen', content: 'item 1', id: 'ea' }, { color: 'lightyellow', content: 'item 2', id: 'ea2' } ]); // [initialState, functionToChangeState]
  
  const addItem = () => {
    // filtrar items 
    // const newItems = items.filter( (a, index) =>  index === 0 ) // ['item 1']
    const newItems = [...items];
    const newObj = { content: 'Escribime!', id:Math.random()}


    newItems.push( newObj ) //  3
    console.log(newObj.id)

    
    setItems(newItems);
  }

  const removeItem = (id) => {
    const newItems = items.filter( (item) => {
      // console.log(indexItem)
      // console.log(item)
      return id !== item.id
    });

    setItems(newItems);
  }

  return (
  <div className="app-container">
    <List items={items} onClick={removeItem} />
    <div className="button-container">
      <Button onClick={addItem} content="+"/>
    </div>
  </div>
  );
}

export default App;

