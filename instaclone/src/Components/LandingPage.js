import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Landing Page</h2>
      <button onClick={() => navigate('/postview')}>Enter</button>
    </div>
  );
};

export default LandingPage;