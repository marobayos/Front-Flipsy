import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import UploadPage from './UploadPage';
import logoLogin from './LogoLogin.PNG';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

var apiBaseUrl = "http://localhost:4000/api/";

class Login extends Component {
  constructor(props){

    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
        
         <TextField
           hintText="Usuario o correo electrónico"
           floatingLabelText="USUARIO"
           onChange={(event,newValue) => this.setState({username:newValue})}
           InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />


           
         <br/>
           <TextField
             type="password"
             hintText="Introduce tu contraseña"
             floatingLabelText="CONTRASEÑA"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <Button type='submit' color="primary" label="Enviar" style={style} onClick={(event) => this.handleClick(event)}>
                ENVIAR
            </Button>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      loginComponent:localloginComponent
    }
  }
  handleClick(event){
    var self = this;
    var payload={
      "userid":this.state.username,
	    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("Login successfull");
       var uploadScreen=[]; 
       uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
     }
     else if(response.data.code == 204){
       console.log("La contraseña del nombre de usuario no coincide");
       alert(response.data.success)
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>        
          <img width="30%" src={logoLogin} className="logoLogin" alt="logoLogin" />
        </MuiThemeProvider>
        
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;