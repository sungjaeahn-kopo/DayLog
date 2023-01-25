import {add, format} from 'date-fns';
import React, {useContext, useState} from 'react';
import CalendarView from '../CalendarView';
import LogContext from '../contexts/LogContext';
import FeedList from '../FeedList';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  // 기본값 : 현재날짜
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
