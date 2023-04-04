export interface DayProgressType {
  id: string
  weekDay: string
  status: LogStatus
}

export enum LogStatus {
  INITIAL = 'INITIAL',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED'
}

export interface LogType {
  id: string
  createdAt: string
  expiresAt: string
  status: LogStatus
}

export interface HabitType {
  id: string
  totalOfDays: number
  currentDay: number
  title: string
  description: string
  category: string
  weekProgress: DayProgressType[]
  completed: boolean
  createdAt: string
  logs: LogType[]
}
