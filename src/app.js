import moment from 'moment';

export class App {
  startDate = moment();
  
  dateChanged(date) {
    this.startDate = date;
  }
}
