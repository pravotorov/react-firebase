import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import { Alert } from "./components/Alert";
import AlertState from "./context/alert/alertState";
import { FirebaseState } from './context/firebase/FirebaseState';

// =========== Components =========== //
const Home = lazy(() => import ('./pages/Home'));
const About = lazy(() => import ('./pages/About'));
const Navbar = lazy(() => import ('./components/Navbar'));


const App = () => {
  return (
  <FirebaseState>
    <AlertState>
      <BrowserRouter>
          <Suspense fallback={<div><p>Loading</p></div>}>
              <Navbar/>
              <div className="container pt-4">
                  <Alert/>
                  <Switch>
                  <Route path="/"  component={Home} />
                  <Route path="/about" component={About} />
                </Switch>
              </div>
          </Suspense>
      </BrowserRouter>
    </AlertState>
  </FirebaseState>
  );
}

export default App;
