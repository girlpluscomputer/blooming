export enum Weekday {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}
export interface DayProgressType {
  id: Weekday
  dayOfTheWeek: keyof typeof Weekday
  disabled?: boolean
  completed: boolean
}

export interface HabitType {
  id: string
  totalOfDays: number
  currentDay: number
  title: string
  description: string
  category: string
  weekProgress: DayProgressType[]
  repeat: string
  completed: boolean
  createdAt: string
}
