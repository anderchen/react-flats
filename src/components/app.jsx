import React, { Component } from 'react';

import GoogleMap from 'google-map-react';

import Marker from './marker';
import FlatList from './flatList';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
  };

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <GoogleMap center={this.props.center} zoom={this.props.zoom}>
            <Marker lat={59.955413} lng={30.337844} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default App;
