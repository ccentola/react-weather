import react from "react";


const CurrentWeather = ({city, coord, current, icon, currentWeather, currentWeatherDescription}) => {

    return (
        
        <div className="ui fluid card">
            <a className="image" href="#"><img src={`http://openweathermap.org/img/w/${icon}.png`} /> </a>
            <div className="content">
                <a className="header" href="#">{city}</a>
                <div className="meta">
                    <p>Lat: {coord.lat} | Lon: {coord.lon}</p>
                </div>
                <div className="description">
                    <p>{currentWeather}</p>
                    <p>Temperature: {Math.round(current.temp)} &#8457;</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;