import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PostView from './components/PostView';
import NewPost from './components/NewPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/postview" element={<PostView />} />
        <Route path="/newpost" element={<NewPost />} />
      </Routes>
    </Router>
  );
};

export default App;