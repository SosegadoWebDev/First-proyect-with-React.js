import React from "react";

export default class Title extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export function hola() {    //importar usando las llaves {}
    return ("Hola")
}
