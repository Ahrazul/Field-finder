import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fields from './Pages/fields/fields';
import Login from './Pages/login/login';
import Registration from './Pages/registration/registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Fields />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
