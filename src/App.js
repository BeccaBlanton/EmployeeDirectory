
import React, { useState, useEffect } from "react";
import Table from "./Table";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://randomuser.me/api/");
      setData(result.data);
    })();
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
