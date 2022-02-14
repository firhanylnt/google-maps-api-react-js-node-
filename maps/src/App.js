import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={14} defaultCenter={{ lat: -6.142837378870265, lng: 106.77709118108051 }}>
      {props.markers.map(marker => {
        const dats = marker.data;
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
            label={marker.count.toString()}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div id={marker.id}>
                  <div style={{textAlign:'center'}}>
                    <h3>{marker.time} ({marker.count})</h3>

                    <table style={{width:'100%'}}>
                      <th>Brand</th>
                      <th>User Count</th>
                    <tbody>
                      {dats.map((x , i) => {
                        return(
                          <tr data-index={i} style={{textAlign:'center'}}>
                          <td>{x.brand}</td>
                          <td>{x.user_per_brand}</td>
                        </tr>
                        )
                        
                      })}
                      
                    </tbody>
                  </table>
                  </div>
                  
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      marks: [],
      selectedMarker: false
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/get_data")
      .then(res => res.json())
      .then(data => {
        this.setState({ marks: data.data })
      })
  }
  handleClick = (marker, event) => {
    this.setState({ selectedMarker: marker })
  }
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.marks}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDveizC57Q8h-pRZ-NaqIDYZu0ICyAhqEE"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}