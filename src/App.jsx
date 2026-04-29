 import './App.css'

import {countAtom} from './stores/Atoms'
import { useRecoilValue, useSetRecoilState , RecoilRoot} from 'recoil';

function App() {
  
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}



function Counter () {
  
  return(<div>
    <CurrentCount />
    <IncreaseCount />
    <DecreaseCount />

  </div>
  );
}

function CurrentCount (){
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  );
}

function IncreaseCount() {
  const setCount = useSetRecoilState(countAtom);
  function Increase() {
    setCount(c => c + 1);
  }

  return (
    <div>
      <button onClick={Increase}>Increase</button>
    </div>
  );
}

function DecreaseCount() {
  const setCount = useSetRecoilState(countAtom);

  function decrease() {
    setCount(c => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App
