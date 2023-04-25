export enum LogStatus {
  INITIAL = 'INITIAL',
  COMPLETED = 'COMPLETED',
  DISABLED = 'DISABLED'
}

export interface LogType {
  id: string
  createdAt: Date
  expiresAt: Date
  completed: boolean
}

export interface HabitType {
  id: string
  totalOfDays: number
  currentDay: number
  title: string
  description: string
  category: string
  completed: boolean
  createdAt: string
  logs: LogType[]
}
