import { format, isToday, isTomorrow } from 'date-fns';

export default function useDate(date: string): string {
  return date && isToday(new Date(date))
    ? 'Today'
    : isTomorrow(new Date(date)) ? 'Tomorrow' : format(new Date(date), 'E, d LLL');
}
