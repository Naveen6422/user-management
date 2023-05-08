
import './App.css'
import AddUsers from './compenents/AddUsers';
import AllUsers from './compenents/AllUsers';
import Dashboard from './compenents/Dashbord';
import NavBar from './compenents/NavBar';
import EditUser from './compenents/EditUser';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
