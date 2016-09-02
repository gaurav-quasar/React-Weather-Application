var React = require('react');

var About = () => {
    return (
      <div>
        <h1 className='text-center'>About</h1>
        <h4>Welcome to the about page!</h4>
        <dl>
          <dt>Purpose</dt>
          <dd>To learn/test React, Foundation like Frameworks.</dd>
          <dt>Usage</dt>
          <dd>To search current temperature for any city.</dd>
        </dl>
      </div>
    )
}

module.exports = About;
