export type ID = number;

export interface IMAGE {}

export type YES_OR_NO = 'Y' | 'N';

// DATE 객체의 argument로 사용할 수 있는 string을 말함
export type DATE = string;
// URL type aliasing
export type URL = string;

export type MAYBE<T> = T | undefined;

export type NULLABLE<T> = T | null;

export type ValueOf<T> = T[keyof T];

export type Theme = 'light' | 'dark';
