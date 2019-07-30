import React from "react"
import RaiserButton from "material-ui/RaisedButton"
import { teal100 } from "material-ui/styles/colors"
import { Card } from "material-ui/Card"
import data from "../request/lugares"
import Title from "../components/title"
import Benefit from "../components/benefits"
import Places from "../components/lugares/lugarCard"
import CSSTransitionGroup from "react-transition-group/TransitionGroup"

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            lugares: []
        }
        // setInterval(() => {
        //   this.setState({             //Para actualizar el valor de algun estado utilizar siempre setState()
        //     numero: this.state.numero + 1
        //   })
        // }, 1000);
        this.updateNumero = this.updateNumero.bind(this) //buena práctica 
        // console.log(data)
        this.hidePlace = this.hidePlace.bind(this)
        setTimeout(() => {
            this.setState({
                lugares: data.lugares
            })
        }, 100);

    }
    updateNumero() {
        this.setState({
            numero: this.state.numero + 1
        })
    }
    lugares() {
        return this.state.lugares.map((lugares, index) => {
            return (
                <Places onRemove={this.hidePlace} lugares={lugares} index={index}></Places>
            )
        })
    }
    hidePlace(lugar) {
        this.setState({
            lugares: this.state.lugares.filter(el => el !== lugar)
        })
    }

    render() {
        return (
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
                        <Benefit></Benefit>
                    </div>
                    <div>
                        <h2 style={
                            { "marginTop": "100px" }
                        }>Conoce Lugares!</h2>
                        <Card>
                            <CSSTransitionGroup style={
                                { "marginTop": "5px" }
                            }
                            >
                                {this.lugares()}
                            </CSSTransitionGroup>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}