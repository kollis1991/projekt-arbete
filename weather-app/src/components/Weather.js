//Renderar ut alla mina olika väder-tjänster


import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div className="weather__info">

                   { 
                   this.props.city && this.props.country && 
                   <p className ="weather__key">Ställe: <span className ="weather__value"> {this.props.city}, {this.props.country}</span></p>
                   }
                   { 
                   this.props.temperature &&
                   <p className ="weather__key">Temperatur: <span className ="weather__value"> {this.props.temperature}</span></p>
                   }
                   { 
                   this.props.humidity && 
                   <p className ="weather__key"> Fuktighet: <span className ="weather__value"> {this.props.humidity}</span></p>
                   }
                   { 
                   this.props.description &&
                   <p className ="weather__key">Väder: <span className ="weather__value"> {this.props.description}</span></p>
                   }
                   { 
                   this.props.error && 
                   <p className = "weather__error" > {this.props.error} </p> 
                   }
               
            </div>

        );

    }
};

export default Weather;