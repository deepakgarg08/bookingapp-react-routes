import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker';
function DateTimePicker(props) {
  const [value, onChangeDate] = useState(new Date());
  console.log('value od date', value)
  const [time, onChangeTime] = useState('10:00');
  console.log('time', time)
  console.log('props', props)

  
  return (
    <div>
      <span id="text">Please choose Date:</span>
      <br />
      <br />
      <DatePicker className="datepickr"
        onChange={onChangeDate}
        value={value}
      />  <br />
      <br />
      <span id="text">Please choose TIme:</span>
      <br />
      <br />
      <TimePicker className="timepickr"
        onChange={onChangeTime}
        value={time}
      />
      
    </div>
  );
}

export default DateTimePicker

