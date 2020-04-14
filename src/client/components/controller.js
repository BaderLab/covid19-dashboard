import EventEmitter from 'eventemitter3';

export class Controller {
  constructor(data){
    this.bus = new EventEmitter();
    this.data = [];
  }

  refresh(data){
    this.data = data;

    console.log(data)
    this.bus.emit('refresh');
  }

  setViewport(){

  }
}

export default Controller;