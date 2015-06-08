var React = require('react');
var calculate = require('../js/calculate');

var Calculator = React.createClass({
  render: function () {
    return (
      <span>
          <input type="text" ref="a" defaultValue={1} onChange={this.handleChange} style={{width:2+'em'}} />
          <b>&nbsp;+&nbsp;</b>
        <input type="text" ref="b" defaultValue={2} onChange={this.handleChange} style={{width:2+'em'}} />
      <b>&nbsp;=&nbsp;</b><b dangerouslySetInnerHTML={{__html: this.state.result}} />
      </span>
        )
      },
      // set the default values
      getInitialState: function(){
        return {result: 3};
      },
      // execute change (handleChange is a custom method, called from the input)
      handleChange: function(evt){
        this.setState({result: calculate.add(React.findDOMNode(this.refs.a).value,React.findDOMNode(this.refs.b).value)});
      }
    });
    // render the view
    React.render(<Calculator />, document.getElementById('calculator'));

module.exports = Calculator;

//&nbsp;<i dangerouslySetInnerHTML={{__html: this.state.txt}} />
