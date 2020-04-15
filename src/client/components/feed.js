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
  }

  componentWillUnmount(){
    this.busProxy.removeAllListeners();
  }

  render(){
    const { controller } = this.props;
    const now = new Date();

    return h('div.feed', controller.data.map(entry => {
      const date = entry.date;
      const relativeDate = formatDistance(date, now) + ' ago';
      const absoluteDate = format(date, 'yyyy-MM-dd');
      const { age, sex } = entry.patient_information;
      const { fever, cough, fatigue } = entry.symptoms;
      
      const Symptom = ({ hasSymptom, icon }) => h('div.feed-symptom', {
        className: classNames({ 'feed-symptom-true': hasSymptom })
      }, [
        h(`i.fas.fa-fw.fa-${icon}`)
      ]);

      return h('div.feed-entry', [
        h('div.feed-title', [
          h('div.feed-patient', [
            h('div.feed-patient-descr', [
              h('div.feed-age', age),
              h('div.feed-sex', sex)
            ]),
            h('div.feed-symptoms', [
              h(Symptom, { hasSymptom: fever, icon: 'thermometer-three-quarters' }),
              h(Symptom, { hasSymptom: cough, icon: 'head-side-cough' }),
              h(Symptom, { hasSymptom: fatigue, icon: 'bed' })
            ]),
          ]),
          h('div.feed-date', [
            h('div.feed-date-relative', relativeDate),
            h('div.feed-date-absolute', absoluteDate)
          ]),
        ]),
        h('div.feed-tests', [
          h('div.feed-test', { style: { width: '100%' } }),
          h('div.feed-test', { style: { width: '66%' } }),
          h('div.feed-test', { style: { width: '33%' } })
        ])
      ]);
    }));
  }
}

export default Feed;