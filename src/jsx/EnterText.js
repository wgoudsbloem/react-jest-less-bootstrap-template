var React = require('react');

var EnterText = React.createClass({
  render: function () {
    return (
      <div>
          <input type="text" defaultValue={this.state.txt} onChange={this.handleChange} />
          &nbsp;<i dangerouslySetInnerHTML={{__html: this.state.txt}} />
        </div>
        )
      },
      // execute change (handleChange is a custom method, called from the input)
      handleChange: function(val){
        this.setState({txt: val.target.value});
      },
      // set the default values
      getInitialState: function(){
        return {txt: 'type some text here'};
      }
    });
    // render the view
    React.render(<EnterText />, document.getElementById('txtInput'));

module.exports = EnterText;
