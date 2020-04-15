import EventEmitter from 'eventemitter3';
import { parseISO, compareDesc } from 'date-fns';

export class Controller {
  constructor(data){
    this.bus = new EventEmitter();
    this.data = [];
  }

  refresh(data){
    this.data = data;

    // add calculated or non-json objects to each entry
    this.data.forEach(entry => {
      entry.date = parseISO(entry.timestamp); // Date class
    });

    this.data.sort((a, b) => compareDesc(a.date, b.date));

    console.log('Loaded sample data');
    console.log(data);

    this.bus.emit('refresh');
  }

  setViewport(){

  }
}

export default Controller;