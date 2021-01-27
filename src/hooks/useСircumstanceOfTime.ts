import { isToday, isTomorrow } from 'date-fns';
import useFormattedDate from './useFormattedDate';

export default function useCircumstanceOfTime(date: string): string {
  if (isToday(new Date(date))) {
    return 'Today'
  }

  if (isTomorrow(new Date(date))) {
    return 'Tomorrow'
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useFormattedDate(date)
}
