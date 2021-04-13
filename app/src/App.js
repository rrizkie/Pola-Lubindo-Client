import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ContextProvider } from "./context/globalState";
import {Loading } from './components/loading'
// const Loading = lazy(()=> import('./components/loading'))
const LoginPage = lazy(() => import("./components/loginPage"));
const HomePage = lazy(() => import("./components/homePage"));

function App() {
  
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={HomePage} />
          </Suspense>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
