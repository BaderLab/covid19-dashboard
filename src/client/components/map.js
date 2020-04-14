import h from 'react-hyperscript';
import { Component } from 'react';
import L from 'leaflet';
import { EventEmitterProxy } from '../../util';
import { add } from 'date-fns';

export class Map extends Component {
  constructor(props){
    super(props);

    this.busProxy = new EventEmitterProxy(props.controller.bus);
  }

  componentDidMount(){
    this.initMap();

    this.busProxy.addListener('refresh', () => this.updatePOIs());
  }

  componentWillUnmount(){
    this.busProxy.removeAllListeners();
  }

  initMap(){
    const map = this.map = L.map(this.mapContainer);

    // TODO set this based on gps query -- currently using canned value from example data
    map.setView([43.83155486662417, -79.37278747558595], 10);

    window.map = map;

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

  updatePOIs(){
    const { data } = this.props.controller;

    const makeGeo = entry => L.geoJSON(entry.location, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 8,
          fillColor: "#ff7800",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      }
    }).addTo(this.map);

    data.forEach(makeGeo);
  }

  render(){
    const { controller } = this.props;

    return h('div.map', {
      ref: el => this.mapContainer = el
    });
  }
}

export default Map;