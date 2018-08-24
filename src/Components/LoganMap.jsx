import React from 'react'
import '../App.css'
import GoogleMapReact from 'google-map-react'
import LoganMapInstance from './LoganMapInstance'


class LoganMap extends React.Component {
    componentDidMount() {
        console.log()
      }
      render() {
        return (
            <div id="map" className="map-box">
             <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyJ4DkX9g-x6blTKDjDdf9EI2_mGKRTPM" }}
          defaultCenter={{lat: 41.923122, lng: -87.709290}}
          defaultZoom={15}
        >
          <LoganMapInstance
            lat={41.923122}
            lng={-87.709290}
          />
        </GoogleMapReact>
            </div>
        )
    }
}    

export default LoganMap

