import { useState } from 'react';
import './App.css';
import data from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container' >
        <h3>{people.length} birtday today</h3>
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
