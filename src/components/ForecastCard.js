import React from "react";
import moment from "moment";

// day, icon, low, high


const ForecastCard = ({ forecast }) => {
    return (
        <div className="item">
            <div className="ui grid">
                <div className="four wide column">
                <div className="middle aligned content">
                        <a className="header">{moment.unix(forecast.dt).format('dddd')}</a>
                    </div>
                </div>
                <div className="four wide column">
                    <div className="middle aligned content">
                        <img src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} /> 
                    </div>
                </div>
                <div className="four wide column">
                    <div className="middle aligned content">
                        <p>L: {Math.round(forecast.temp.min)}</p>
                    </div>
                </div>
                <div className="four wide column">
                    <div className="middle aligned content">
                        <p>L: {Math.round(forecast.temp.max)}</p>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default ForecastCard;