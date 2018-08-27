import React from 'react'
import '../App.css'
import GoogleMapReact from 'google-map-react'
import Modal from '@material-ui/core/Modal'
import { FaBullseye } from "react-icons/fa"
import { FaBeer } from 'react-icons/fa'
import { IoIosRestaurant } from "react-icons/io"
import { FiShoppingBag } from "react-icons/fi"
import { MdDirectionsRun } from "react-icons/md"


class LoganMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        } 
    }

    componentDidMount() {
 
      }
      
      makeModalGo(){
        console.log(this.props);
      }
   makeModalGoAway() {
        this.state.setState({open: false})
    }
    
      render() {
        return (
            <div id="map" className="map-box">
             <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDyJ4DkX9g-x6blTKDjDdf9EI2_mGKRTPM" }}
          defaultCenter={{lat: 41.929, lng: -87.71}}
          defaultZoom={15}
        >
            <FaBullseye
            key= "1"
            lat= {41.931}
            lng= {-87.712}
            isModalOpen = {this.props}
            className="filter-icons"
            onClick={this.makeModalGo}
            />
          <Modal 
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.makeModalGoAway}
        />
             <FaBeer
            key= "2"
            lat= {41.929}
            lng= {-87.716}
            className="filter-icons"
            />
             <IoIosRestaurant
            key= "3"
            lat= {41.932}
            lng= {-87.713}
            className="filter-icons"
            />
             <FiShoppingBag
            key= "4"
            lat= {41.932}
            lng= {-87.715}
            className="filter-icons"
            />
             <MdDirectionsRun
            key= "5"
            lat= {41.928}
            lng= {-87.708}
            className="filter-icons"
            />
        </GoogleMapReact>
            </div>
        )
    }
}    

export default LoganMap

