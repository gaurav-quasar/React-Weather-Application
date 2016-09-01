var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
      <div>
        <h1 className='text-center'>Examples</h1>
        <p>Here are a few locations to try:</p>
        <ol>
          <li>
            <Link to='/?location=Delhi'>Delhi, India</Link>
          </li>
          <li>
            <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
          </li>
          <li>
            <Link to='/?location=Jersey City'>Jersey City, NJ</Link>
          </li>
        </ol>
      </div>
  );
}

module.exports = Examples;
