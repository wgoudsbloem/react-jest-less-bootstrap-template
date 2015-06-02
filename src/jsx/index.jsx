var React = require('react');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hellooooo, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);
