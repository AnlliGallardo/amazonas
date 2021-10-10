import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Mapa extends Component {

  constructor(posicion1) {
    super(this.props);
    console.log(posicion1)
    console.log(this.props.history.location.posicion1.center.lat)
    
    this.state = {
      stores: [{lat: 4.60971, lng: -74.08175},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }


  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker 
        
      key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={console.log("Holis!")} />
    })
  }

  render(props) {
    return (
        <Map
          google={props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 4.60971, lng: -74.08175}}
          >
            {this.displayMarkers()}
        </Map>
    );
  }
  
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAVJ8ohZk2QG-3vHyrUMTwih-e87uRrcGU'
})(Mapa);