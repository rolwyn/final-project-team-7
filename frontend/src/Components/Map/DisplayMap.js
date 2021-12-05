import React from 'react';
import  {GoogleMap} from 'react-google-maps';
function Map(){
    return ((
        <GoogleMap defaultZoom={10} defaultCenter={{lat : 42.360081, lng :-71.058884}} ></GoogleMap>
    ));
}