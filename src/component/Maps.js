import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import useGeolocation from 'react-hook-geolocation'
const Maps = (props) => {
    const geolocation = useGeolocation()
    let temlat=geolocation.latitude;
    let temlng=geolocation.longitude;
    const { ref, map, google } = useGoogleMaps(
        // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
        "AIzaSyCfsyvHR_8zr5M62w7w_FxP90uMtGJItGU",
        // NOTE: even if you change options later
        {
          center: { lat: temlat, lng: temlng },
          zoom: 4,
        },
      );
  return (

       <div ref={ref} style={{ width: "760px", height: "800px"}} />
    
  );
};
export default Maps;