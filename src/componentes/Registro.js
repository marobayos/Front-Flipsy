import React, {Component} from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import regis from './regis.svg';


let theme = createMuiTheme(
    {overrides: {
            MuiInputLabel: { // Name of the component ⚛️ / style sheet
                root: {
                    color: "white",
                    "&$focused": { // increase the specificity for the pseudo class
                        color: "white",
                    }
                }
            },
            MuiInput: { // Name of the component ⚛️ / style sheet
                root: {
                    color: "white",
                    "&$focused": { // increase the specificity for the pseudo class
                        color: "white"
                    }
                },
                underline:{
                    borderBottomColor:"white"
                }
            },
            MuiTypography:{
                body1: {
                    color: "white",
                    "&$focused": { // increase the specificity for the pseudo class
                        color: "white"
                    }
                }
            },
            MuiFormControl:{
                root:{
                    width:"80%"
                },
                marginDense:{
                    width:"100%",
                }
            }
        }
    });

class Registro extends Component{
    constructor(){
        super();
        this.state = {
            correo:'',
            usuario:'',
            contra:'',
            terminos: false
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleInput(e){
        const {value,name} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){

    }

    handleChecked(e) {
        this.setState({
            terminos: e.target.checked

        })
    };


    render (){
        return(
            <div className="Registro">
                <div className="wave">

                <img src={regis} className="img-regis" alt="logo-registro" />
                </div>

                <form className="formRegis" onSubmit={this.handleSubmit}>
                    <FormControl>
                        <ThemeProvider theme={theme}>
                            <FormGroup>
                                <TextField
                                    label='CORREO ELECTRÓNICO'
                                    onChange ={this.handleInput}
                                    name = 'correo'
                                    type='isEmail'
                                    required= {true}
                                    margin= 'dense'
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    label = 'USUARIO'
                                    onChange ={this.handleInput}
                                    name = 'usuario'
                                    margin= 'dense'
                                    required= {true}
                                />
                            </FormGroup>
                            <FormGroup>
                                <TextField
                                    label = 'CONTRASEÑA'
                                    onChange ={this.handleInput}
                                    name = 'contra'
                                    required= {true}
                                    margin= 'dense'
                                    type = 'password'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.terminos}
                                            onChange={this.handleChecked}
                                            color= {"primary"}
                                            margin= 'dense'
                                            required= {true}
                                        />
                                    }
                                    label="He leído y acepto los Términos y Condiciones"
                                    color='white'
                                />
                            </FormGroup>
                            <Button type='submit' color="primary">
                                REGISTRARSE
                            </Button>
                        </ThemeProvider>
                    </FormControl>
                </form>

            </div>
        )
    }
}

export default Registro;
