import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactMapGl from 'react-map-gl'
import PlacesList from '../PlacesList'
import CustomPopup from '../CustomPopup'
import CustomMarker from '../CustomMarker'
import {Header, StyledNavigationControl} from './styles'
import {H2} from '../../styles'

import mapboxgl from 'mapbox-gl'
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default // eslint-disable-line

const accessToken =
  'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

class Map extends Component {
  state = {
    showPopup: false,
    selectedMarker: null,
    viewport: {
      width: '100%',
      height: 500,
      latitude: 39.0626831,
      longitude: -101.642682,
      zoom: 3,
    },
  }

  closePopup = () => {
    this.setState({
      selectedMarker: null,
    })
  }

  setSelectedMarker = (place) => {
    this.setState({
      selectedMarker: place,
    })
  }

  flyToLocation = (long, lat, zoom) => {
    this.setState({
      viewport: {
        width: '100%',
        height: 500,
        latitude: lat,
        longitude: long,
        zoom: zoom,
      },
    })
  }

  render() {
    const {places} = this.props
    const {selectedMarker} = this.state

    return (
      <>
        <Header>
          <H2>Map View</H2>
        </Header>
        <PlacesList places={places} flyToLocation={this.flyToLocation} />
        <ReactMapGl
          {...this.state.viewport}
          mapboxApiAccessToken={accessToken}
          onViewportChange={({latitude, longitude, zoom}) =>
            this.setState((state) => ({
              ...state,
              viewport: {...state.viewport, latitude, longitude, zoom},
            }))
          }
        >
          <StyledNavigationControl showCompass={false} />
          {selectedMarker && <CustomPopup place={selectedMarker} closePopup={this.closePopup} />}
          {places.map((place) => (
            <CustomMarker key={place.id} place={place} setSelectedMarker={this.setSelectedMarker} />
          ))}
        </ReactMapGl>
      </>
    )
  }
}

Map.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Map
