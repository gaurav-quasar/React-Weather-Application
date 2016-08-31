var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherOutput = require('WeatherOutput');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
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
        city: '',
        temp: '',
        isLoading: false
      });
      console.log(err);
    });
  },
  render: function () {
    var {isLoading, city, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3> Fething Weather...</h3>;
      } else if (city && temp) {
        return <WeatherOutput city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <div>Get Weather</div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
