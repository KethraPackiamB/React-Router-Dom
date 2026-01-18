import React from "react";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
  const products = {
    id: "1049",
    name: "Mobile",
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/page-two/${products.id}/${products.name}`);
  };

  return (
    <div>
      <h1>Page One</h1>
      <button onClick={handleNavigate}>Next</button>
    </div>
  );
};

export default PageOne;

