import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './componentes/MainLogin'
import Registro from './componentes/Registro'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin' component={Login} />
        <Route path="/signup" component={Registro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
