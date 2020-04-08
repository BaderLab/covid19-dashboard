import h from 'react-hyperscript';
import { Component } from 'react';
import L from 'leaflet';

export class Map extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.initMap();
  }

  initMap(){
    const map = this.map = L.map(this.mapContainer);

    // TODO set this based on gps query -- currently using leaflet demo coords
    map.setView([51.505, -0.09], 13);

    // add the background tiles for the map viz
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // alt tile layer -- dark mode, could be useful for colour highlights on the map
    // var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    //   maxZoom: 20,
    //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    // });
  }

  render(){
    const { controller } = this.props;

    return h('div.map', {
      ref: el => this.mapContainer = el
    });
  }
}

export default Map;