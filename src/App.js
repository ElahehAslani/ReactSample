import React from 'react';
import Users from './Users';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value : "",
      inputValue : ""
    }
  }

  updateInputValue(evnt){
    this.setState({
      inputValue : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    return {
      value : parseInt(this.state.inputValue)
    }
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
