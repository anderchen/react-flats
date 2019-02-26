import React, { Component } from 'react';

import Marker from './marker';
import FlatList from './flatList';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <Marker />
        </div>
      </div>
    );
  }
}

export default App;
