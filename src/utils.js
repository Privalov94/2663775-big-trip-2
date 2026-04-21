import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const MONTH_DAY_FORMAT = 'MMM DD';
const MINUTE_DURATION = 1000 * 60;
const HOUR_DURATION = MINUTE_DURATION * 60;
const DAY_DURATION = HOUR_DURATION * 24;

function formatDate(date, format = MONTH_DAY_FORMAT) {
  return date ? dayjs(date).format(format) : '';
}

function getDuraction(dateFrom, dateTo) {
  const difference = dayjs(dateTo).diff(dateFrom);

  let format = 'mm[M]';

  if (difference >= HOUR_DURATION) {
    format = 'HH[H] mm[M]';
  }
  if (difference >= DAY_DURATION) {
    format = 'D[D] HH[H] mm[M]';
  }

  return dayjs.duration(difference).format(format);
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

export { formatDate, getDuraction, updateItem };
