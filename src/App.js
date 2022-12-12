import { useState } from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';
import './App.css';

function App() {
  const [star, setStar] = useState(0);
  console.log(star);

  return (
    <div className="App">
      {(star > 0) ? <ThankYouCard star={star}/> : <RatingCard setStar={setStar}/>}
    </div>
  );
}
export default App;