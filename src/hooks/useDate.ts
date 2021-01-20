import { useEffect, useState } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';

function useDate(date: string): any {
  const [formattedDate, setFormattedDate] = useState(date);

  useEffect(() => {
    setFormattedDate(date && isToday(new Date(date))
      ? 'Today'
      : isTomorrow(new Date(date)) ? 'Tomorrow' : format(new Date(date), 'E, d LLL'));
  }, [date]);

  return [formattedDate];
}

export default useDate;
