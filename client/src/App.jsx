import './assets/App.css';
// import { Accordion, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CarAccordion from './components/CarAccordion.jsx';
import CarSearchForm from './components/CarSearchForm.jsx';

// create a function that fetches all the data in the database
export const getData = async () => {
  const response = await fetch(`/find`);
  return new Promise(async (resolve, reject) => {
    if (response.ok) {
      try {
        const data = await response.json();
        resolve(data);
      } catch (err) {
        console.log({ err });
      }
    }

    reject(response.statusText);
  });
};

function App() {
  const [Status, setStatus] = useState('Hello World');

  // this following function only runs once when the page loads
  useEffect(() => {
    getData()
      .then((res) => {
        setStatus(res.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <h2>{Status}</h2>

      <h1>Nelson's Car database</h1>
      <div className="carComponents">
        <div>
          <CarAccordion />
        </div>
        <div>
          <CarSearchForm />
        </div>
      </div>
    </div>
  );
}

export default App;
