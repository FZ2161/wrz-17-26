import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './components/usersList';
import UserData from './components/userData';






function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<UsersList/>}/>
          <Route path='/users/:id' element={<UserData/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Home() {
  return (

    <div className='m-4'>
      <h1 >Panel Użytkowników</h1>
    </div>
  );
}