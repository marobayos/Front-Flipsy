import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './componentes/MainLogin'
import Registro from './componentes/Registro'
import Verification from './componentes/Verification'
import Confirmation from './componentes/Confirmation'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} /> 
        <Route path="/signup" component={Registro} />
        <Route path="/verification" component={Verification} />
        <Route path="/confirm" component={Confirmation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
