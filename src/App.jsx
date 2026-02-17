import Page1 from "./components/Page1";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
