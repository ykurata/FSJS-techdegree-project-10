import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  // Initialize the state
  constructor(props) {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    this.getCourses();
  }

  getCourses = () => {
    axios.get('/api/courses')
      .then(response => {
        this.setState({
          list: response.data
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item, id) => {
              return(
                <div key={id}>
                  {item.title}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default App;
