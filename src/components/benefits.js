import React from "react"
import { deepOrangeA200, lightBlueA400, amberA400 } from "material-ui/styles/colors"
import { Card, CardText } from "material-ui/Card"

export default class Benefits extends React.Component {
    render() {
        return (
            <ul>
                <Card className="header-benefit">
                    <CardText style={{
                        "backgroundColor": deepOrangeA200,
                        "paddingBottom": "0px"
                    }}>
                        <div className="row">
                            <div className="col-md-6 header-benefit-img">
                                <img src={process.env.PUBLIC_URL + "/img/love.png"} alt="love"></img>
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
                                <img src={process.env.PUBLIC_URL + "/img/no-wifi.png"} alt="no-internet"></img>
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
                                <img src={process.env.PUBLIC_URL + "/img/stars.png"} alt="favorite-places"></img>
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
        )
    }
}