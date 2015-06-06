var React = require('react');
var dao = require('../js/dao');

var HelloWorld =  React.createClass({
  render: function () {
    /** @jsx React.DOM */
    return (
      <div>
        <h2>{this.props.date.toTimeString()}</h2>
          <p>(This text is inserted by React) This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.
          </p>
          <h4>XMLHttpRequest: <b dangerouslySetInnerHTML={{__html: this.state.msg}} /></h4>
        </div>
    );
  },
  getInitialState: function(){
    return {msg: 'empty'};
  },
  componentDidMount: function(){
    dao.promise
    .then(function(res){
      this.setState({msg: res.data.text});
      // don't forget to bind!!!
    }.bind(this),
    function(res){
      console.error('request failed with status: ' + res.status);
    });
  }
});

setInterval(function() {
  React.render(
      <HelloWorld date={new Date()} />, document.getElementById('example') ); }, 500);

      module.exports = HelloWorld;
