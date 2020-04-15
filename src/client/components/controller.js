import EventEmitter from 'eventemitter3';
import { parseISO, compareDesc } from 'date-fns';

export class Controller {
  constructor(data){
    this.bus = new EventEmitter();
    this.data = [];
    this.filteredData = [];
  }

  refresh(data){
    this.data = data;

    // add calculated or non-json objects to each entry
    this.data.forEach(entry => {
      entry.date = parseISO(entry.timestamp); // Date class
    });

    this.data.sort((a, b) => compareDesc(a.date, b.date));
    this.filteredData = Array.from(this.data);

    console.log('Loaded sample data');
    console.log(data);

    this.bus.emit('refresh', this.data);
  }

  filter(by){
    this.filteredData = this.data.filter(by);

    console.log('Filtered data');
    console.log(this.filteredData);

    this.bus.emit('filter', this.filteredData);
  }
}

export default Controller;