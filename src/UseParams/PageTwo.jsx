import React from "react";
import { useLocation, useParams } from "react-router-dom";

const PageTwo = () => {
  const location = useLocation();
  console.log(location);

  const params = useParams();

  return (
    <div>
      <h1>Page Two</h1>
      <h4>{params.id} - {params.name}</h4>
    </div>
  );
};

export default PageTwo;

