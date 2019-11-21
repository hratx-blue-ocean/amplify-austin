import React, { useState } from "react";
import axios from "axios";
import { geolocated } from "react-geolocated";
import Fab from "@material-ui/core/Fab";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import ErrorModal from "../NotificationModal/ErrorModal";

const CurrentLocationButton = props => {
  const [errorToggle, setErrorToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "An error has occured please try again"
  );

  return (
    <React.Fragment>
      <Fab
        color="primary"
        size="small"
        onClick={() => {
          if (!props.isGeolocationAvailable) {
            setErrorMessage("GeoLocation is not available on this browser!");
            setErrorToggle(true);
          } else if (!props.isGeolocationEnabled) {
            setErrorMessage("GeoLocation is not enabled");
            setErrorToggle(true);
          } else {
            // Nab Latitude and Longitude, send off to Google API for decoding
            let key = `&key=${process.env.REACT_APP_MAP_API_KEY}`;
            let https = `https://maps.googleapis.com/maps/api/geocode/json?latlng=`;
            let coordinates = `${props.coords.latitude},${props.coords.longitude}`;
            const request = `${https}${coordinates}${key}`;
            axios
              .get(request)
              .then(results => {
                if (results.data.results.length) {
                  let shortAddress = "";
                  const addressComponents = results.data.results[0].address_components;
                  // Make sure address is within Austin
                  const addressCheck = addressComponents.map((part) => part.long_name)
                  if (!addressCheck.includes('Austin')) {
                    setErrorMessage("Invalid location: Must be in Austin, TX");
                    setErrorToggle(true);
                    return
                  }
                  for (let i = 0; i < addressComponents.length; i++) {
                    let addressPart = addressComponents[i].long_name;
                    if (addressPart === "Austin" || addressPart === "Texas") {
                      break;
                    } else {
                      shortAddress = `${shortAddress} ${addressPart}`;
                    }
                  }
                  props.setLocation(shortAddress.trim());
                } else {
                  setErrorMessage("Error reading your location");
                  setErrorToggle(true);
                }
              })
              .catch(err => {
                setErrorMessage("Error reading your location");
                setErrorToggle(true);
              });
          }
        }}
      >
        <MyLocationIcon />
      </Fab>
      <ErrorModal
        CurrentState={errorToggle}
        ChangeState={setErrorToggle.bind(this)}
        Message={errorMessage}
      />
    </React.Fragment>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(CurrentLocationButton);
