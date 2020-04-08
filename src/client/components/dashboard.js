import h from 'react-hyperscript';
import { Component } from 'react';
import { Map } from './map';
import { Feed } from './feed';

export class Dashboard extends Component {
  constructor(props){
    super(props);

    this.controller = {}; // TODO
  }

  render(){
    const { controller } = this;

    return h('div.dashboard', [
      h('div.dashboard-viz', [
        h(Map, { controller })
      ]),
      h('div.dashboard-info-panel', [
        h(Feed)
      ])
    ]);
  }
}

export default Dashboard;