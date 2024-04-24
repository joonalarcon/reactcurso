import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  const Home = () => <h1>Hola</h1>;
  const SearchPage = () => <h1>search page</h1>

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage/>} />
      </Routes>
    </div>
  );
}

export default App;

