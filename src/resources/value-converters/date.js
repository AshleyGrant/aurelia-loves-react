import moment from 'moment';

export class DateValueConverter {
  toView(value, format = 'dddd, MMMM D, YYYY') {
    return moment(value).format(format);
  }
}