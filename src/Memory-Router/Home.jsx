import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

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

