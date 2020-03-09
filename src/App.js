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

  updateInputValue(event){
    this.setState({
      inputValue : event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState(()=>{
      return {
        value : parseInt(this.state.inputValue)
      }
    })
  }

  render() {

    var userArray = [];
    var i;

    for (i=0; i < this.state.value; i++) {
      userArray.push(
        <Users key={i}/>
      )
    }

    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <div>
          <thead>
            <th>Avatar</th>
            <th>User Name:</th>
            <th>Password:</th>
          </thead>
          {userArray}
        </div>
      </div>
    )
  }
}

export default App;
