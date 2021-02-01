import { getDayName, getFormattedDate } from '../utils';

export default function useFormattedDate(date: string, getFullDate = false): string {
  const dayName = getDayName(date);
  const formattedDate = getFormattedDate(date);

  if (getFullDate) {
    return dayName ? `${dayName} • ${formattedDate}` : formattedDate;
  }

  return dayName || formattedDate;
}
