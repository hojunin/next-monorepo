import dayjs from 'dayjs';

/**
 * 날짜를 YYYYMMDD로 표현합니다.
 * @param {string} date
 * @returns {string}
 */
export const YYYYMMDD = (date: string): string => dayjs(date).format('YYYY MM DD');
