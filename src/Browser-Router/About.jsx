import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contact");
    }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleNavigate}>Next</button>
    </div>
  )
}

export default About
