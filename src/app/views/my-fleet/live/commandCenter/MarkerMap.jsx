import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon,
  LatLng
} from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { Card, Button } from "@material-ui/core";

const triangleCoords = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 }
];

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDASQ1gDtuxVXsoeJZHXqsNRASQ17yVoEI&libraries=visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`}} />,
    mapElement: <div style={{ height: `100%`, borderRadius: '12px' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4}
    defaultCenter={{ lat: 22.551, lng: -70.111 }}
    defaultOptions={{
      scrollwheel: true, //we disable de scroll over the map, it is a really annoing when you scroll through page
      mapTypeControl: false,
      zoomControl: true,
      minZoom: 2,
    }}
  >
    {props.showVehicle ? 
    <Marker
      isMarkerShown={false}
      position={{ lat: 22.551, lng: -70.111 }}
      onClick={props.onMarkerClick}
    >
      <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <Card className="p-16">
          <p className="white-space-pre m-0">Hello World !!!</p>
        </Card>
      </InfoBox>
    </Marker> : null}
    {props.showOpearting ?  <Polygon
      path={triangleCoords}
      key={1}
      editable={false}
      options={{
        strokeColor: "#006ce6",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "rgba(0, 108, 230, 0.13)",
        fillOpacity: 0.35
      }}
    /> : null}
    {props.showHeat ? 
      <HeatmapLayer data={[
        new window.google.maps.LatLng(37.782551, -122.445368),
        new window.google.maps.LatLng(37.782745, -122.444586),
        new window.google.maps.LatLng(37.782842, -122.443688),
        new window.google.maps.LatLng(37.782919, -122.442815),
        new window.google.maps.LatLng(37.782992, -122.442112),
        new window.google.maps.LatLng(37.751266, -122.403355)
      ]}/> 
    : null}
  </GoogleMap>
));

class MarkerMap extends React.PureComponent {
  timer;

  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  componentWillUnmount() {
    if (this.timer) clearTimeout(this.timer);
  }

  delayedShowMarker = () => {
    this.timer = setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        showVehicle={this.props.showVehicle}
        showOpearting={this.props.showOpearting}
        showHeat={this.props.showHeat}
      />
    );
  }
}

export default MarkerMap;
