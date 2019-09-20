import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './componentes/MainLogin'
import Registro from './componentes/Registro'
import CodeConfirmation from './componentes/CodConf'
import Home from './componentes/Home'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Registro} exact />
        <Route path="/signup" component={Registro} />
        <Route path='/signin' component={Login} />
        <Route path='/confirm-code' component={CodeConfirmation} />
        <Route path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
