import React from "react";
import GoogleMapReact from "google-map-react";

const PuregoldMap = () => {
  const defaultProps = {
    center: {
      lat: 14.5861626,
      lng: 120.9853378,
    },
    zoom: 11,
  };

  return (
    <div className="h-70 w-80">
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   key: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap",
        // }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
};

export default PuregoldMap;
