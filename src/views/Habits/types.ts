export interface DayProgressType {
  id: string
  weekDay: string
  disabled: boolean
  completed: boolean
}

export interface LogType {
  id: string
  completed: boolean
  createdAt: string
  disabled: boolean
  weekDay: string
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
  logs: LogType[]
}
