import React from "react"
import { grey300 } from "material-ui/styles/colors"
import { Card, CardText, CardMedia, CardTitle, CardActions } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"
import CSSTransition from "react-transition-group/CSSTransition"

export default class PlaceCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <CSSTransition timeout={1000} classNames="fade" in={this.props.in}
            >
                <div className="col-xs-12 col-sm-12" key={this.props.index} style={
                    { "padding": "0px" }
                }>
                    <Card style={
                        { "backgroundColor": grey300 }
                    }>
                        <CardMedia>
                            <img src={process.env.PUBLIC_URL + this.props.lugares.imageUrl} alt="place"></img>
                        </CardMedia>
                        <CardTitle title={this.props.lugares.title}></CardTitle>
                        <CardText>{this.props.lugares.description}</CardText>
                        <CardActions style={
                            { "textAlign": "right" }
                        }>
                            <FlatButton secondary={true} label="Ver más"></FlatButton>
                            <FlatButton secondary={true} onClick={() =>
                                this.props.onRemove(this.props.lugares)
                            } label="Ocultar"></FlatButton>
                        </CardActions>
                    </Card>
                </div>
            </CSSTransition >
        )

    }
}