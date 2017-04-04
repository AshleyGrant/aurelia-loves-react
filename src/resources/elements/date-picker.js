import React from 'react';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';
import { noView, bindable, inject } from 'aurelia-framework';

@noView(['react-datepicker/react-datepicker.css'])
@inject(Element)
export class DatePicker {
  @bindable selectedDate;
  @bindable onChange;

  constructor(element) {
    this.element = element;
  }

  selectedDateChanged() {
    this.render();
  }

  render() {
    ReactDOM.render(
      <ReactDatePicker
        selected={this.selectedDate}
        onChange={date => this.onChange({ date: date })}
      />,
      this.element
    );
  }

  // How to use native DOM events to pass the changed date
  /*render() {
    ReactDOM.render(
      <ReactDatePicker
        selected={this.selectedDate}
        onChange={date => {
          let event = new CustomEvent('change', { 'detail': date });

          // Dispatch the event.
          this.element.dispatchEvent(event);
        }
        }
      />,
      this.element
    );
  }*/
}
