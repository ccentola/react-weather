import React from "react";
import SearchBar from "./SearchBar";
import openWeather from "../apis/openWeather";
import CurrentWeather from "./CurrentWeather";
import ForecastCardList from "./ForecastCardList";

class App extends React.Component {

  state = { 
    coord: [],
    city: '',
    current: [],
    currentWeather: '',
    currentWeatherDescription: '',
    currentIcon: '',
    forecasts: []
  }

  componentDidMount() {
    // default search term
    this.onSearchSubmit('boston');
  }

  getOneCall = async (lat, lon) => {
    const response = await openWeather.get('/onecall',{
      params: {
        lat: lat,
        lon: lon,
        units: 'imperial',
        exclude: 'minutely,hourly'
      }

    });

    console.log(response)
    this.setState({ 
      forecasts: response.data.daily,
      current: response.data.current,
      currentWeather: response.data.current.weather[0].main,
      currentWeatherDescription: response.data.current.weather[0].description,
      currentIcon: response.data.current.weather[0].icon,
    })

  }

  onSearchSubmit = async term => {
    const response = await openWeather.get('/weather',{
      params: {
        q: term,
        units: 'imperial'
      }

    });

    // console.log(response)

    
    this.setState({
      coord: response.data.coord,
      city: response.data.name
    })
    
    // console.log(this.state.conditions)

    this.getOneCall(this.state.coord.lat, this.state.coord.lon)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>

        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <CurrentWeather 
                coord={this.state.coord}
                city={this.state.city}
                current={this.state.current}
                icon={this.state.currentIcon}
                currentWeatherDescription={this.state.currentWeatherDescription}
                currentWeather={this.state.currentWeather}
              />
            </div>
            <div className="eight wide column">
              <ForecastCardList forecasts={this.state.forecasts}/>
            </div>
          </div>
        </div>
        
      </div>
    )
  }

}

export default App;
