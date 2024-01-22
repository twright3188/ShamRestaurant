import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Paragraph from '../Paragraph';
import styles from './styles';
import Colors from '../../theme';

export const DeliveryTimeInput = (props) => {
  const { fromTime, setFromTime, untilTime, setUntilTime, text } = props;
  return (
    <View style={styles.blockStyles}>
      <Paragraph>
        {text}
      </Paragraph>
      <View style={styles.intervalStyles}>
        <DatePicker 
          style={styles.timePickerStyles}
          date={fromTime}
          mode="time"
          placeholder="select time"
          format="h:mmA"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          is24Hour
          minuteInterval={30}
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-end',
              height: 'auto',
            },
            dateText: {
              fontSize: 16,
              color: Colors.timeRangeColor
            },
          }}
          /* eslint no-shadow: ['error', { 'allow': ['fromTime', 'untilTime'] }] */
          onDateChange={(fromTime) => {setFromTime( fromTime );}}
        />
        <Paragraph style={{ color: Colors.timeRangeColor }}>—</Paragraph>
        <DatePicker 
          style={styles.timePickerStyles}
          date={untilTime}
          mode="time"
          placeholder="select time"
          format="h:mmA"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          is24Hour
          minuteInterval={30}
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-end',
              height: 'auto',
              width: 'auto',
            },
            dateText: {
              width: 'auto',
              fontSize: 16,
              color: Colors.timeRangeColor,
            },
          }}
          onDateChange={(untilTime) => {setUntilTime( untilTime );}}
        />
      </View>
    </View>
  );
};

DeliveryTimeInput.propTypes = {
  fromTime: PropTypes.string,
  setFromTime: PropTypes.func,
  untilTime: PropTypes.string,
  setUntilTime: PropTypes.func,
  text: PropTypes.string,
};

DeliveryTimeInput.defaultProps = {
  fromTime: '00:00',
  setFromTime: null,
  untilTime: '00:00',
  setUntilTime: null,
  text: ''
};