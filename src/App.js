import { List } from './components/list';
import { Button } from './components/button';
import './App.css';

function App() {
  return (
  <div className="app-container">
    <List items={['item 1', 'item 2']} />
    <div className="button-container">
      <Button content="+"/>
    </div>
  </div>
  );
}

export default App;

