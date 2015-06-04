var React = require('react');

var HelloWorld =  React.createClass({
  render: function () {
    /** @jsx React.DOM */
    return (
      <div>
        <h2>{this.props.date.toTimeString()}</h2>
          <p>(This text is inserted by React) This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.
          </p>
        </div>
    );
  }}); setInterval(function() { React.render(
      <HelloWorld date={new Date()}/>, document.getElementById('example') ); }, 500);

      module.exports = HelloWorld;
