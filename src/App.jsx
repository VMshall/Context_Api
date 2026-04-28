import { useState } from 'react'

import './App.css'

function App() {
  
  return (
  <div> 

    <Counter />

  </div> 
  );

}



function Counter () {
  const [ count , setCount ] = useState(0);

  return(<div>
    {count}
    <IncreaseCount  setCount={setCount} />
    <DecreaseCount setCount={setCount} />

  </div>
  );
}

function IncreaseCount({setCount}) {

  function Increase () {
      setCount(c => c + 1);

    }

  return (<div>
     <button onClick={Increase}>Increase</button>
  </div>
  );

}

function DecreaseCount({setCount}) {

  function decrease() {

    setCount(c => c - 1);
  }

  return (<div>
    <button onClick={decrease}>Decrease</button>
  </div>
  );
}

export default App
