import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaiserButton from "material-ui/RaisedButton"
import { teal100, deepOrangeA200, lightBlueA400, amberA400 } from "material-ui/styles/colors"
import { Card, CardText } from "material-ui/Card"



import Title from "./components/title"
import { hola } from "./components/title"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    }
    // setInterval(() => {
    //   this.setState({             //Para actualizar el valor de algun estado utilizar siempre setState()
    //     numero: this.state.numero + 1
    //   })
    // }, 1000);
    this.updateNumero = this.updateNumero.bind(this) //buena práctica 
  }

  updateNumero() {
    this.setState({
      numero: this.state.numero + 1
    })
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="background-header">
          <div style={
            {
              "width": "80%",
              "margin": "0 auto",
            }
          }>
            <div className="header-main">
              <Title title="Lugares!"></Title>
              <h4>Descubre nuestra Web app Lugares! con {this.state.numero} disponibles para conocer</h4>
              <RaiserButton label="Crear una cuenta" secondary={true}></RaiserButton>
              <br></br>
              <button onClick={() => this.updateNumero()}>Incrementador</button>
              {/* <img className="header-ilustration" src={process.env.PUBLIC_URL + "/img/1.jpg"}></img> */}
            </div>
            <div style={{
              "backgroundColor": teal100,
              "borderRadius": "5px",
              "padding": "45px",
              "paddingBottom": "10px"
            }}>
              <ul>
                <Card className="header-benefit">
                  <CardText style={{
                    "backgroundColor": deepOrangeA200,
                    "paddingBottom": "0px"
                  }}>
                    <div className="row">
                      <div className="col-md-6 header-benefit-img">
                        <img src={process.env.PUBLIC_URL + "/img/love.png"}></img>
                      </div>
                      <div className="col-md-6 header-benefit-content">
                        <div>
                          <h3>
                            Calificaciones con emociones
                          </h3>
                          <p>Califica tus lugares con experiencias, no con números</p>
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="header-benefit">
                  <CardText style={{
                    "backgroundColor": amberA400,
                    "paddingBottom": "0px"
                  }}>
                    <div className="row">
                      <div className="col-md-6 header-benefit-img">
                        <img src={process.env.PUBLIC_URL + "/img/no-wifi.png"}></img>
                      </div>
                      <div className="col-md-6 header-benefit-content">
                        <div>
                          <h3>
                            ¿Sin internet?
                          </h3>
                          <p>Lugares! funciona sin internet o en conexiones lentas</p>
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>
                <Card className="header-benefit">
                  <CardText style={{
                    "backgroundColor": lightBlueA400,
                    "paddingBottom": "0px"
                  }}>
                    <div className="row">
                      <div className="col-md-6 header-benefit-img">
                        <img src={process.env.PUBLIC_URL + "/img/stars.png"}></img>
                      </div>
                      <div className="col-md-6 header-benefit-content">
                        <div>
                          <h3>
                            Tus lugares favoritos
                          </h3>
                          <p>Creá tu lista de favoritos para verlos más tarde</p>
                        </div>
                      </div>
                    </div>
                  </CardText>
                </Card>
              </ul>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;
