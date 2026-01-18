import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const Contact = () => {

     const navigate = useNavigate();

     const location = useLocation();
     console.log(location);

    const handleNavigate = () => {
        navigate("/");
    }
  return (
    <div>
        <h1>Contact Page</h1>
        <button onClick={handleNavigate}>Next</button>
    </div>
  )
}

export default Contact;
