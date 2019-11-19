import React from 'react';
import { geolocated } from 'react-geolocated'

class CurrentLocationButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => {
          if (!this.props.isGeolocationAvailable) {
            console.log('GeoLocation is not available on this browser!')
          } else if (!this.props.isGeolocationEnabled) {
            console.log('Geolacation is not enabled')
          } else {
            // console.log('here', this.props.coords);
          }
        }}>Where I'm At</button>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CurrentLocationButton);