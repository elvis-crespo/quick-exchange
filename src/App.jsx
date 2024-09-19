import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { History } from './Pages/History'
import { ContactUs } from './Pages/ContactUs';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Landing } from './Pages/Landing';
import { NotFound } from './Pages/NotFound';
import { Login } from './Pages/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={true} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
