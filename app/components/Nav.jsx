var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearchSubmit: function (e) {
    e.preventDefault();
    var city = this.refs.city.value;

    if (city.length > 0) {
      this.refs.city.value = '';
      window.location.hash = '#/?city=' + city;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather Application</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearchSubmit}>
            <ul className="menu">
              <li>
                <input type="search" ref='city' placeholder="Search Weather by City Name."/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
