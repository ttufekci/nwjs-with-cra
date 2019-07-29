import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const fs = window.require('fs');

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {files: []}
  }

  componentDidMount() {
    fs.readdir('/', (err, files) => {
        this.setState({files: files});
    });
  }  

  renderFiles = () => {
    return this.state.files.map((file, index) => {
        return (<p key={index}>{file}</p>);
    })
  };

  render() {
      return (
          <div className="App">
              <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h2>Welcome to React/NW.js</h2>
              </div>
              <p className="App-intro">
                  Hello NW.js!
              </p>
              {this.renderFiles()}
          </div>
      );
  }
}

export default App;
