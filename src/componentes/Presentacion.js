import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ReactCardFlip from 'react-card-flip';

import '../App.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Our Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class Presentacion extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {

        return (

            <React.Fragment>
                <header className="header" style={{position:"relative"}}>
                    <nav className="menuBar">
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Empleados</a>
                                <ul>
                                    <li><a href="#">Juan</a></li>
                                    <li><a href="#">Paco</a></li>
                                    <li><a href="#">Ramón</a></li>
                                    <li><a href="#">María</a></li>
                                </ul>
                            </li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contacto</a>
                                <ul>
                                    <li><a href="#">Email</a></li>
                                    <li><a href="#">

                                    </a></li>
                                </ul>

                            </li>

                            <li> <b> <img className="icon" onmouseover="this.style.backgroundColor=#999" src="../settings.svg" alt="Front"
                                 height="100" width="100">
                            </img> </b> <ul>
                                <li><a href="#">Juan</a></li>
                                <li><a href="#">Paco</a></li>
                                <li><a href="#">Ramón</a></li>
                                <li><a href="#">María</a></li>
                            </ul></li>
                        </ul>
                    </nav>
                </header>
                <CssBaseline />
                <main>

                    <div backgroundColor ="blue">
                        <Container maxWidth="sm">
                            <div>
                                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                    Busqueda
                                </Typography>
                            </div>

                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Flipsy
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph >
                                Descripcion del conjunto de flaschards o del usuarios
                            </Typography>
                            <div >
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Anterior
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Siguiente
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container >
                        <Grid container justify="space-evenly" >
                            <Grid item xs={12} sm={6} md={4}>
                                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" class="cont_1">
                                    <div clasName="card" class="cont_1" key="front" onClick={this.handleClick}>
                                        <img class="flipcard" src="https://source.unsplash.com/random" alt="Front" height="100" width="100">
                                        </img>
                                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                            Parte frontal de la tarjeta aqui puede ir una imagen u otras cosas
                                        </Typography>
                                    </div>
                                    <div clasName="card" class="cont_1" key="back" onClick={this.handleClick}>
                                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                            Hola contenido de la tarjeta en la parte de atras aqui iran los datos y demas
                                        </Typography>
                                    </div>
                                </ReactCardFlip>
                            </Grid>
                        </Grid>
                    </Container>
                </main>


                <footer>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Ingenieria de software - Universidad Nacional de Colombia 2019
                    </Typography>
                    <Copyright />
                </footer>

            </React.Fragment>
        );
    }
}
export default Presentacion