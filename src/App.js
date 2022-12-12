import { useState } from 'react';
import RatingCard from './components/RatingCard';
import './App.css';

function App() {
  const [star, setStar] = useState(0);
  return (
    <div className="App">
      <RatingCard setStar={setStar}/>
    </div>
  );
}
export default App;