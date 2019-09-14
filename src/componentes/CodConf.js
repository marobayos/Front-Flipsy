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
import Grid from '@material-ui/core/Grid';

class CodConf extends Component{ //codigo de confirmacion
    constructor(){
        super();
        this.state = {
            n1:'',
            n2:'',
            n3:'',
            n4: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value,name} = e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit(e){

    }

    render (){
        return(
            <div className="CodConf">
                <label>
                    <p>
                        Te hemos enviado al correo <span className="azul">un código de 4 dígitos
                        <br/> Ingresalo aquí </span> para continuar.
                    </p>
                </label>
                <label>
                    <p className="pequeño"> *Si sales de la aplicación, podrás ingresar el código desde el menú de inicio</p>
                </label>
                <form className="formConf" onSubmit={this.handleSubmit}>

                    <FormControl>

                            <FormGroup>
                                <TextField
                                    inputProps={{ style: { textAlign: 'center', fontSize:'xx-large'}}}
                                    onChange ={this.handleInput}
                                    name = 'n1'
                                    required= {true}
                                    margin= 'dense'
                                    type= 'number'
                                />

                                <TextField
                                    inputProps={{ style: { textAlign: 'center', fontSize:'xx-large'}}}
                                    onChange ={this.handleInput}
                                    name = 'n2'
                                    required= {true}
                                    margin= 'dense'
                                    type= 'number'
                                />
                                <TextField
                                    inputProps={{ style: { textAlign: 'center', fontSize:'xx-large'}}}
                                    onChange ={this.handleInput}
                                    name = 'n3'
                                    required= {true}
                                    margin= 'dense'
                                    type= 'number'
                                />
                                <TextField
                                    inputProps={{ style: { textAlign: 'center', fontSize:'xx-large'}}}
                                    onChange ={this.handleInput}
                                    name = 'n4'
                                    required= {true}
                                    margin= 'dense'
                                    type= 'number'
                                />
                            </FormGroup>
                        <Button variant="contained" color="primary" >
                            CONFIRMAR
                        </Button>
                    </FormControl>
                </form>

            </div>
        )
    }
}

export default CodConf;
