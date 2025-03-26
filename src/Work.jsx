import React, { useState, useEffect } from "react";

function Work() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const apiUrl = "https://api.api-ninjas.com/v1/exercises?muscle=biceps";
    

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-lg bg-gray-50 mt-60">
      <h1 className="text-2xl font-bold text-center mb-5">Fitness Data</h1>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <ul className="space-y-4">
        {data.map((item) => (
          <li key={item.id} className="p-4 border rounded-md bg-white shadow-sm">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
