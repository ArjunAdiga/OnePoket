import React, { useState, useEffect } from 'react';

const FetchApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>name and description</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchApi;
