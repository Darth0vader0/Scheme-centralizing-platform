import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from './pages/SignIn';  // Assuming Login is a TSX component
import { SignUp } from './pages/SignUp'; // Assuming Signup is a TSX component
import { Home } from './pages/Home'; // Assuming ServerPage is a TSX component
import { SuggestedSchemes } from './pages/SuggestedSchemes';
import { Admin } from './pages/Admin';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path='/SchemePage' element={<SuggestedSchemes />} />  
        <Route path='/admin' element={<Admin />} />  
        {/* Redirect to login if no path matches */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
