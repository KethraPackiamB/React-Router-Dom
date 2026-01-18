import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

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

