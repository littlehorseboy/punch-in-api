export type PeriodsOfTheDayType = 'morning' | 'afternoon';

export interface PunchIn {
  date: string;
  time: string;
  periodsOfTheDay: PeriodsOfTheDayType;
}
