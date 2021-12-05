import React from 'react';
import  {GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
//import 'use-places-autocomplete'
function Map(){
    const libraries =  ["places"]
    const {isLoaded, loadError}= useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    return ((
        <GoogleMap defaultZoom={10} defaultCenter={{lat : 42.360081, lng :-71.058884}} ></GoogleMap>
    ));
}

//const WrappedMap = //withScriptjs(withGoogleMap(Map));

export default Map;