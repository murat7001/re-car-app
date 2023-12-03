import React, { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '@/store/DateSlice/dateSlice';
import moment from 'moment/moment';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const DateRange = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.dates);


  const handleDateRangeChange = (dates) => {
    const [start, end] = dates || [];
    dispatch(setDate([
      start ? start.format(dateFormat) : '',
      end ? end.format(dateFormat) : '',
    ]));
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={[
          startDate ? moment(startDate) : null,
          endDate ? moment(endDate) : null,
        ]}
        onChange={handleDateRangeChange}
        format={dateFormat}
      />
    </Space>
  );
};

export default DateRange;