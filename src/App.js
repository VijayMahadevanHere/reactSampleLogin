import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserDataProvider } from './shared/userDataProvider';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (
    <Router>
      <UserDataProvider>
        <div>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/about" element={<Page2 />} />
          </Routes>
        </div>
      </UserDataProvider>
    </Router>
  );
}

export default App;
