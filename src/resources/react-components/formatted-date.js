import React from 'react';
import moment from 'moment';

export default class FormattedDate extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (!this.props.date) {
            return null;
        }

        let { date, format } = this.props;
        
        return (
            <span>
                {moment(date).format(format)}
            </span>
        );
    }
}

FormattedDate.defaultProps = { 
    date: new Date(),
    format: 'dddd, MMMM D, YYYY'
 };