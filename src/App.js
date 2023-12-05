import { useState } from 'react';
import List from './components/List';
import data from "./helper/data";
function App() {
  
  const [start,setStart] = useState(0);
  const [person,setPerson] = useState(data.slice(start,start+5));
  const changeStart= ()=>(
    setPerson(data.slice(start+5,start+10))
  )
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees 1 to 5)
        </h5>
        <List person={person}/>
        <div className='btns'>
          <button onClick={changeStart}>Prev</button>
          <button >Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
