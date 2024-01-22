import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Paragraph from '../Paragraph';
import styles from './styles';

export const DeliveryDateInput = (props) => {
  const { date, setDate, text } = props;
  const minDate = 1546300800000;
  const maxDate = 1861920000000;
  return (
    <View style={styles.blockStyles}>
      <Paragraph>
        {text}
      </Paragraph>
      <DatePicker 
        style={styles.datePickerStyles}
        date={date}
        mode="date"
        placeholder="select date"
        format="DD MMMM YYYY"
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            borderWidth: 0,
            alignItems: 'flex-end',
            height: 'auto'
          },
          dateText: {
            fontSize: 16,
            color: '#78807B'
          },
        }}
        /* eslint no-shadow: ['error', { 'allow': ['date'] }] */
        onDateChange={date => {
          setDate(date);
        }}
      />
    </View>
    
  );
};

DeliveryDateInput.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]).isRequired,
  setDate: PropTypes.func,
  text: PropTypes.string,
};

DeliveryDateInput.defaultProps = {
  setDate: null,
  text: ''
};