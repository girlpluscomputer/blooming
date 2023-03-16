export interface DayProgressType {
  id: string
  dayOfTheWeek: string
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
