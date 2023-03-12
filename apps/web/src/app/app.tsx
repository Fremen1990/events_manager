import NxWelcome from './nx-welcome';

import {Route, Routes, Link} from 'react-router-dom';
import {useEffect} from "react";

export function App() {


  const getApiDev = async () => {
    const response = await fetch('http://localhost:3333/api');
    console.log("API DEV", response);
  }

  const getApiProd = async () => {
    const response = await fetch('https://events-manager-api-cd.herokuapp.com/api');
    console.log("API PROD", response);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/api').then(res => res.json()
      ).catch(err => console.log(err));
      console.log("API DEV", response);
    })()
    // getApi()
  }, [])

  return (
    <>
      <NxWelcome title="web"/>
      <div/>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br/>
      <hr/>
      <br/>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
