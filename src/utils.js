import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
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
  const point = { ...update, dateFrom: formatDate(update.dateFrom, 'YYYY-MM-DDTHH:mm:ss'), dateTo: formatDate(update.dateTo, 'YYYY-MM-DDTHH:mm:ss')};
  return items.map((item) => item.id === update.id ? point : item);
}

function sortPointsByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function sortPointsByDay(pointA, pointB) {
  return dayjs(pointA.dateFrom) - dayjs(pointB.dateFrom);
}

function sortPointsByDuration(pointA, pointB) {
  const differencePointA = dayjs(pointA.dateTo).diff(pointA.dateFrom);
  const differencePointB = dayjs(pointB.dateTo).diff(pointB.dateFrom);
  return differencePointB - differencePointA;
}

export { formatDate, getDuraction, updateItem, sortPointsByPrice, sortPointsByDay, sortPointsByDuration };
