import React, { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const App = () => {
  const [dateRange, setDateRange] = useState([
    dayjs(),
    null
  ]);

  const handleDateChange = (dates) => {
    setDateRange(dates);
    console.log(dates.map(date => date ? date.format(dateFormat) : null));
  };

  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        value={dateRange}
        onChange={handleDateChange}
        format={dateFormat}
      />
    </Space>
  );
};

export default App;
