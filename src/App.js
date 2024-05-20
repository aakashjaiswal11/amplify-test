import { Route, Routes } from 'react-router-dom';
import home from './components/Home';
import Login from './components/Login';
import Favorite from './components/Favorite';
import "bootstrap/dist/css/bootstrap.min.css"
import Protected from './components/Protected';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" Component={home} />
        <Route exact path="/Favorite" element={<Protected Component={Favorite} />} />
        <Route exact path="/Login" Component={Login} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;