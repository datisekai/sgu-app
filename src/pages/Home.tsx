import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/${value}`);
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          placeholder='Nhap mssv'
        />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default Home;
