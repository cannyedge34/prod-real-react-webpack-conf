import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        Home - <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;