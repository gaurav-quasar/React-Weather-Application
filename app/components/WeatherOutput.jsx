var React = require('react');

var WeatherOutput = ({city, temp}) => <h3 className='text-center'>Current temperature in {city} is {temp}</h3>;

module.exports = WeatherOutput;
