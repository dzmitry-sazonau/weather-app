import { format } from 'date-fns';
import { standardFormatForDate } from '../utils';

export default function useFormattedDate(
  date: string,
  formatForDate = standardFormatForDate
): string {
  return format(new Date(date), formatForDate);
}
