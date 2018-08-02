var React = require('react');
var ReactDOM = require('react-dom');
var PropTyupes
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello furnd!
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
