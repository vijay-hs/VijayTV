import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { useRemoteNavigation } from './hooks/useRemoteNavigation';
import { MovieDetail } from './pages/MovieDetail';

const AppContent: React.FC = () => {
    useRemoteNavigation();
    return (
        <div style={{ outline: 'none' }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reality" element={<Home />} />
            <Route path="/serials" element={<Home />} />
            <Route path="/live" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
