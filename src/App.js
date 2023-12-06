import { useState } from 'react';
import List from './components/List';
import data from "./helper/data";
function App() {
  const [index, setIndex] = useState(0);
  const prevFunc = () => {
    setIndex((index - 5 + data.length) % data.length);
  };
  const nextFunc = () => {
    setIndex((index + 5) % data.length);
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List data={data.slice(index, index + 5)} />
        <div className='btns'>
          <button onClick={prevFunc}>Prev</button>
          <button onClick={nextFunc}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
