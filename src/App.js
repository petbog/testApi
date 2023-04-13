import { Route, Routes } from 'react-router-dom';
import './App.css';
import InnerList from './component/innerList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InnerList />} />
      </Routes>
    </div>
  );
}

export default App;
