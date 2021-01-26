import React from 'react'
import {Marker} from 'react-map-gl'
import PropTypes from 'prop-types'
import {ReactComponent as MapPin} from '../assets/map-pin.svg'

const CustomMarker = ({place, setSelectedMarker}) => {
  const handleClick = () => {
    setSelectedMarker(place)
  }

  return (
    <Marker
      latitude={place.coordinates[1]}
      longitude={place.coordinates[0]}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <div className="marker" onClick={handleClick}>
        <MapPin />
      </div>
    </Marker>
  )
}

export default CustomMarker

CustomMarker.propTypes = {
  place: PropTypes.object,
  setSelectedMarker: PropTypes.func,
}
