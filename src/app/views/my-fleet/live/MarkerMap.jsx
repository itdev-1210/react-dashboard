import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { createPortal } from 'react-dom'
import { MAP } from 'react-google-maps/lib/constants'
import PropTypes from 'prop-types'

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { Card, Button } from "@material-ui/core";

class MapControl extends React.Component {

  static contextTypes = {[MAP]: PropTypes.object}

  componentWillMount() {
    this.map = this.context[MAP]
    this.controlDiv = document.createElement('div')
    this.map.controls[this.props.position].push(this.controlDiv)
  }
  componentWillUnmount() {
    this.map.controls[this.props.position].pop()
  }
  render() {
    return createPortal(this.props.children, this.controlDiv)
  }
}

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDASQ1gDtuxVXsoeJZHXqsNRASQ17yVoEI&libraries=visualization",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, marginLeft: '-24px', marginRight: '-24px' }} />,
    mapElement: <div style={{ height: `100%`, borderRadius: '12px' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultOptions={{
      scrollwheel: true, //we disable de scroll over the map, it is a really annoing when you scroll through page
      disableDefaultUI: true,
      mapTypeControl: false,
      zoomControl: false,
      minZoom: 2,
    }}
  >
    <MapControl position={window.google.maps.ControlPosition.BOTTOM_RIGHT}>
      <Button variant="contained" style={{ width: '162px' }} color="primary" className="m-12" onClick={props.onCenterClick}>
        <span className="capitalize">Command Center</span>
      </Button>
    </MapControl>
    <Marker
      isMarkerShown={false}
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onMarkerClick}
    >
      <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <Card className="p-16">
          <p className="white-space-pre m-0">Hello World !!!</p>
        </Card>
      </InfoBox>
    </Marker>
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

  onCenterClick = () => {
    this.props.handleCenterClose();
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        onCenterClick={this.onCenterClick}
      />
    );
  }
}

export default MarkerMap;
