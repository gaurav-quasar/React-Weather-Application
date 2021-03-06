var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (city) {
    var self = this;
    this.setState({
      city: undefined,
      temp: undefined,
      errorMessage: undefined,
      isLoading: true
    });

    openWeatherMap.getTemp(city).then(function (temp) {
      self.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (err) {
      self.setState({
        errorMessage: err.message,
        isLoading: false
      });
    });
  },
  componentDidMount: function () {
    var city = this.props.location.query.city;

    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newprops) {
    var city = newprops.location.query.city;

    if (city && city.length > 0) {
      this.handleSearch(city);
      window.location.hash = '#/';
    }
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
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    );
  }
});

module.exports = Weather;
