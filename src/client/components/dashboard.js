import h from 'react-hyperscript';
import { Component } from 'react';
import { MapComponent } from './map';
import { Feed } from './feed';
import Controller from './controller';
import StatsCharts from './stats-charts';

export class Dashboard extends Component {
  constructor(props){
    super(props);

    this.controller = new Controller();
  }

  componentDidMount(){
    const getData = async () => {
      const res = await fetch('/test-data.json');
      const data = await res.json();

      this.controller.refresh(data);
    };

    getData();
  }

  render(){
    const { controller } = this;

    return h('div.dashboard', [
      h('div.dashboard-viz', [
        h(MapComponent, { controller })
      ]),
      h('div.dashboard-info-panel', [
        h(Feed, { controller })
      ]),
      h('div.dashboard-stats-panel', [
        h(StatsCharts, { controller })
      ])
    ]);
  }
}

export default Dashboard;