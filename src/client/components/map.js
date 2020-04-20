import h from 'react-hyperscript';
import { Component } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import { EventEmitterProxy } from '../../util';
import { add } from 'date-fns';

// This isn't working
//
//import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
//import iconUrl from "leaflet/dist/images/marker-icon.png";
//import shadowUrl from "leaflet/dist/images/marker-shadow.png";
//
//delete L.Icon.Default.prototype._getIconUrl;
//
//L.Icon.Default.mergeOptions({
//   iconRetinaUrl: iconRetinaUrl,
//   iconUrl: iconUrl,
//   shadowUrl: shadowUrl
//});


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
});

const makeLatlng = entry => {
  const coords = entry.location.features[0].geometry.coordinates;

  return L.latLng(coords[1], coords[0]);
};

export class MapComponent extends Component {
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
    const { controller } = this.props;

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

    const updateFilter = _.debounce(() => {
      const bounds = this.map.getBounds();

      controller.filter(entry => {
        const { latlng } = this.poiMap.get(entry);

        return bounds.contains(latlng);
      });
    }, 250);

    map.on('move', updateFilter);
    map.on('zoom', updateFilter);
  }

  updatePOIs(){
    const { data } = this.props.controller;

    this.pois = [];
    this.poiMap = new Map();

    let markers = L.markerClusterGroup();

    data.forEach(entry => {
      const geo = makeGeo(entry);
      const latlng = makeLatlng(entry);
      const poi = { geo, entry, latlng };
 
      markers.addLayer(L.marker(latlng));

      this.pois.push(poi);
      this.poiMap.set(entry, poi);

      // geo.addTo(this.map);
    });

    this.map.addLayer(markers);
  }

  render(){
    const { controller } = this.props;

    return h('div.map', {
      ref: el => this.mapContainer = el
    });
  }
}

export default MapComponent;