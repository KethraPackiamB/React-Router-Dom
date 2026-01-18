import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const location = useLocation();

    console.log(location);

    const handleNavigate = () => {
        navigate("/About");
    }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Next</button>
    </div>
  )
}

export default Home;

