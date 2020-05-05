import { Component } from 'react';
import h from 'react-hyperscript';
import Chart from 'chart.js';
import _ from 'lodash';

const isPositive = entry => entry.test_information.result;
const getAge = entry => entry.patient_information.age;
const getFever = entry => entry.symptoms.fever;
const getCough = entry => entry.symptoms.cough;
const getFatigue = entry => entry.symptoms.fatigue;
const getSeverity = entry => entry.symptoms.severity;
const getMild = entry => getSeverity(entry) === 'mild';
const getModerate = entry => getSeverity(entry) === 'moderate';
const getSevere = entry => getSeverity(entry) === 'severe';

export class Histogram extends Component {
  constructor(props){
    super(props);
  }

  getChartConf(){
    const { title, labels, positiveCases, negativeCases } = this.props;

    return {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Infected',
          backgroundColor: 'rgb(194, 10, 10)',
          data: positiveCases
        }, {
          label: 'Uninfected',
          backgroundColor: 'rgb(0, 0, 0)',
          data: negativeCases
        }]
      },
      options: {
        animation: {
          duration: 0
        },
        title: {
          display: true,
          text: title
        },
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        responsive: false,
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true,
            display: false
          }]
        }
      }
    };
  }

  componentDidMount(){
    const ctx = this.canvas.getContext('2d');

    this.chart = new Chart(ctx, this.getChartConf());
  }

  componentDidUpdate(){
    const conf = this.getChartConf();

    this.chart.data = conf.data;

    this.chart.update();
  }

  render(){
    const { width, height } = this.props;

    return h('canvas.stat-chart', {
      ref: el => this.canvas = el,
      height,
      width
    });
  }
}

export class StatsCharts extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  refresh(){
    const { controller } = this.props;
    const entries = controller.filteredData;
    
    const maxAge = 80;
    const ageBucketDist = 10;
    const ageBuckets = [];

    for( let i = 0; i < maxAge; i += ageBucketDist ){
      const min = i;
      const max = i + ageBucketDist - 1;
      const label = `${min} - ${max}`;

      ageBuckets.push({ min, max, label, posCount: 0, negCount: 0 });
    }

    ageBuckets.push({ min: 100, label: `${maxAge}+` });

    const byAge = {
      title: 'Cases by age',
      positiveCases: [],
      negativeCases: [],
      labels: ageBuckets.map(bucket => bucket.label),
      width: 300,
      height: 120
    };

    const bySymptoms = {
      title: 'Cases by symptoms',
      positiveCases: [0, 0, 0],
      negativeCases: [0, 0, 0],
      labels: ['Fever', 'Cough', 'Fatigue'],
      width: 150,
      height: 120
    };

    const bySeverity = {
      title: 'Cases by severity',
      positiveCases: [0, 0, 0],
      negativeCases: [0, 0, 0],
      labels: ['Mild', 'Moderate', 'Severe'],
      width: 150,
      height: 120
    };

    const feverI = 0;
    const coughI = 1;
    const fatigueI = 2;

    const mildI = 0;
    const moderateI = 1;
    const severeI = 2;

    entries.forEach(entry => {
      const age = getAge(entry);
      const fever = getFever(entry);
      const cough = getCough(entry);
      const fatigue = getFatigue(entry);
      const mild = getMild(entry);
      const moderate = getModerate(entry);
      const severe = getSevere(entry);
      const ageBucket = ageBuckets[Math.floor(age/ageBucketDist)];
      const pos = isPositive(entry);

      if( pos ){
        ageBucket.posCount++;

        bySymptoms.positiveCases[feverI] += (fever ? 1 : 0);
        bySymptoms.positiveCases[coughI] += (cough ? 1 : 0);
        bySymptoms.positiveCases[fatigueI] += (fatigue ? 1 : 0);

        bySeverity.positiveCases[mildI] += (mild ? 1 : 0);
        bySeverity.positiveCases[moderateI] += (moderate ? 1 : 0);
        bySeverity.positiveCases[severeI] += (severe ? 1 : 0);
      } else {
        ageBucket.negCount++;

        bySymptoms.negativeCases[feverI] += (fever ? 1 : 0);
        bySymptoms.negativeCases[coughI] += (cough ? 1 : 0);
        bySymptoms.negativeCases[fatigueI] += (fatigue ? 1 : 0);

        bySeverity.negativeCases[mildI] += (mild ? 1 : 0);
        bySeverity.negativeCases[moderateI] += (moderate ? 1 : 0);
        bySeverity.negativeCases[severeI] += (severe ? 1 : 0);
      }
    });

    byAge.positiveCases = ageBuckets.map(bucket => bucket.posCount);
    byAge.negativeCases = ageBuckets.map(bucket => bucket.negCount);

    this.setState({
      byAge,
      bySymptoms,
      bySeverity,
      charts: [byAge, bySymptoms, bySeverity]
    });
  }

  componentDidMount(){
    const { controller } = this.props;

    this.onRefresh = _.debounce(() => this.refresh(), 250);

    controller.bus.on('refresh', this.onRefresh);
    controller.bus.on('filter', this.onRefresh);
  }

  componentWillUnmount(){
    const { controller } = this.props;

    controller.bus.removeListener('refresh', this.onRefresh);
    controller.bus.removeListener('filter', this.onRefresh);
  }

  render(){
    if( !this.state.charts ){
      return null;
    }

    return h('div.stats-charts', this.state.charts.map(chart => h(Histogram, chart)));
  }
}

export default StatsCharts;
