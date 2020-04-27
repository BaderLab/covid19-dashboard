import EventEmitter from 'eventemitter3';
import { parseISO, compareDesc } from 'date-fns';

export class Controller {
  constructor(){
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

    this.bus.emit('refresh', this.data);
  }

  filter(by){
    this.filteredData = this.data.filter(by);

    this.bus.emit('filter', this.filteredData);
  }
}

export default Controller;