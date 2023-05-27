import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchProductsList } from './request';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsList())
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
