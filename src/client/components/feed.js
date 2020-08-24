import h from 'react-hyperscript';
import { Component } from 'react';
import { EventEmitterProxy } from '../../util';
import { formatDistance, format } from 'date-fns';
import classNames from 'classnames';

export class Feed extends Component {
  constructor(props){
    super(props);
    
    this.busProxy = new EventEmitterProxy(props.controller.bus);
  }

  dirty(){
    this.setState({ dirty: Date.now() });
  }

  componentDidMount(){
    this.busProxy.addListener('refresh', () => this.dirty());
    this.busProxy.addListener('filter', () => this.dirty());
  }

  componentWillUnmount(){
    this.busProxy.removeAllListeners();
  }

  render(){
    const { controller } = this.props;
    const now = new Date();

    return h('div.feed', controller.filteredData.map(entry => {
      const date = entry.date;
      const relativeDate = formatDistance(date, now) + ' ago';
      const absoluteDate = format(date, 'yyyy-MM-dd');
      const { age, sex } = entry.patient_information;
      const { fever, cough, fatigue, severity } = entry.symptoms;
      const { result, score: statusScore } = entry.test_information;
      const symptomsScore = (severity === 'mild' ? 0.25 : (severity === 'moderate' ? 0.5 : 1));
      
      const Symptom = ({ hasSymptom, icon, displayName }) => h('div.feed-symptom', {
        className: classNames({ 'feed-symptom-true': hasSymptom })
      }, [
        h(`i.fas.fa-fw.fa-${icon}`, {
          title: hasSymptom ? `Has ${displayName}` : `No ${displayName}`
        })
      ]);

      return h('div.feed-entry', [
        h('div.feed-title', [
          h('div.feed-status', [
            h(`div.feed-status-result.feed-status-result-${result ? 'positive' : 'negative'}`, [
              h(`i.fas.fa-fw.fa-${result ? 'virus' : 'virus-slash'}`, { title: result ? 'Infected' : 'Uninfected' })
            ]),
            h('div.feed-status-score', [
              h('div.feed-status-score-bar', {
                style: { width: `${100 * statusScore}%` },
                title: 'Confidence of test result'
              })
            ])
          ]),
          h('div.feed-patient', [
            h('div.feed-patient-descr', [
              h('div.feed-age', age),
              h('div.feed-sex', sex)
            ]),
            h('.div.feed-symptoms-info', [
              h('div.feed-symptoms', [
                h(Symptom, { hasSymptom: fever, icon: 'thermometer-three-quarters', displayName: 'fever' }),
                h(Symptom, { hasSymptom: cough, icon: 'head-side-cough', displayName: 'cough' }),
                h(Symptom, { hasSymptom: fatigue, icon: 'bed', displayName: 'fatigue' })
              ]),
              h('div.feed-symptoms-score', [
                h('div.feed-symptoms-score-bar', {
                  style: { width: `${100 * symptomsScore}%`},
                  title: 'Severity of symptoms'
                })
              ])
            ])
          ]),
          h('div.feed-date', [
            h('div.feed-date-relative', relativeDate),
            h('div.feed-date-absolute', absoluteDate)
          ]),
        ])
      ]);
    }));
  }
}

export default Feed;