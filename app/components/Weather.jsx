var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    };
  },
  handleSearch: function (city) {
    var self = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(city).then(function (temp) {
      self.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (err) {
      self.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function () {
    var {isLoading, city, temp, errorMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'> Fething Weather...</h3>;
      } else if (city && temp) {
        return <WeatherOutput city={city} temp={temp}/>;
      }
    }

    function renderErrorMessage () {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
