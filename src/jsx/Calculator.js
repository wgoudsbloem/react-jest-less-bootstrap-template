var React = require('react');
var calculate = require('../js/calculate');

var Calculator = React.createClass({
  render: function () {
    return (
      <div>
          <input type="text" defaultValue={this.state.a} onChange={this.handleChange} /><br />
          + <input type="radio" />
          - <input type="radio" /><br />
          <input type="text" defaultValue={this.state.b} onChange={this.handleChange} /><br />
          <b dangerouslySetInnerHTML={{__html: this.state.res}} />
        </div>
        )
      },
      // set the default values
      getInitialState: function(){
        return {a: 1, b: 2, res: 3};
      },
      // execute change (handleChange is a custom method, called from the input)
      handleChange: function(val){
        this.setState({res: calculate.add(val.target.value,this.state.b)});
      }
    });
    // render the view
    React.render(<Calculator />, document.getElementById('calculator'));

module.exports = Calculator;

//&nbsp;<i dangerouslySetInnerHTML={{__html: this.state.txt}} />
