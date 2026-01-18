import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const PageTwo = () => {
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const handleChange = () => {
    setSearchParams({ id: 2, name: "Table" });
  };

  return (
    <div>
      <h1>Page Two</h1>
      <h3>
        {id} - {name}
      </h3>
      <button onClick={handleChange}>update</button>
    </div>
  );
};

export default PageTwo;
