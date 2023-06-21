import React from 'react'; 
// import NavBar from './components/navBar/navBar';
import MainPage from './components/mainPage/mainPage';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
