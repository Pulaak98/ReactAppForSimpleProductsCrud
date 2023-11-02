import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function App() {
  const [data, setData] = useState([]);
const navigate = useNavigate();
  useEffect(() => {

    const apiUrl ="https://www.pqstec.com/InvoiceApps/values/GetProductListAll";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Products Data</h1>
      <button
        className="link-btn"
        onClick={() => {
          navigate("/productcrud");
        }}>
        Add Product
      </button>

      <table>
        <thead>
          <tr>
            <th>ProductId</th>
            <th>ProductName</th>
            <th>Code</th>
            <th>Price</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody>
            <tr key={item.id}>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Code}</td>
              <td>{item.Price}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;


