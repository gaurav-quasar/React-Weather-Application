var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
  return (
      <div>
        <h1 className='text-center page-title'>Examples</h1>
        <p>Below are a few locations to try:</p>
        <ol>
          <li>
            <Link to='/?city=Delhi'>Delhi, India</Link>
          </li>
          <li>
            <Link to='/?city=Tokyo'>Tokyo, Japan</Link>
          </li>
          <li>
            <Link to='/?city=Jersey City'>Jersey City, NJ</Link>
          </li>
        </ol>
      </div>
  );
}

module.exports = Examples;
