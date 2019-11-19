import React from 'react';
import axios from 'axios';
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
            // Nab Latitude and Longitude, send off to Google API for decoding
            let key = `&key=${process.env.REACT_APP_MAP_API_KEY}`;
            let https = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
            let coordinates = `${this.props.coords.latitude},${this.props.coords.longitude}`;

            const request = `${https}${coordinates}${key}`;
            axios.get(request)
              .then((results) => {
                console.log(results);
                let shortAddress = '';
                const addressComponents = results.data.results[0].address_components
                for (let i = 0; i < addressComponents.length; i++) {
                  let addressPart = addressComponents[i].long_name;
                  if (addressPart === 'Austin' || addressPart === 'Texas') {
                    break;
                  } else {
                    shortAddress = `${shortAddress} ${addressPart}`;
                  }
                }
                console.log(shortAddress.trim());
              })
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