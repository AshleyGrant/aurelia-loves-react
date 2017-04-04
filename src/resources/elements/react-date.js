import React from 'react';
import ReactDOM from 'react-dom';
import { noView, bindable, inject } from 'aurelia-framework';
import FormattedDate from '../react-components/formatted-date';

@noView()
@inject(Element)
export class ReactDate {
  @bindable date;
  @bindable format = 'dddd, MMMM D, YYYY';

  constructor(element) {
    this.element = element;
  }

  dateChanged() {
    this.render();
  }

  formatChanged() {
    this.render();
  }

  render() {
    ReactDOM.render(
      <FormattedDate 
        date={this.date}
        format={this.format}
      />,
      this.element
    );
  }
}
