import React from "react";
import ForecastCard from "./ForecastCard";


const ForecastCardList = ({ forecasts }) => {

    const renderedForecast = forecasts.map( forecast => {
        return (
            <ForecastCard 
                key={forecast.dt}
                forecast={forecast}
            />
        )

    });
    console.log(forecasts)

    return (
        <div className="ui relaxded divided list">
            {renderedForecast}
        </div>
    )
}

export default ForecastCardList;