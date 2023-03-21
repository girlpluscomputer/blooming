import { DayProgressType, HabitType } from '@/views/Habits/types'

export const ROUTES = [
  { key: 'home-route', name: 'habits', link: '/' },
  { key: 'challenge-route', name: 'challenges', link: '/challenges' },
  { key: 'progress-route', name: 'progress', link: '/progress' }
]

export const WEEK_PROGRESS: DayProgressType[] = [
  {
    id: 0,
    dayOfTheWeek: 'Monday',
    completed: false,
    disabled: false
  },
  {
    id: 1,
    dayOfTheWeek: 'Tuesday',
    completed: false,
    disabled: false
  },
  {
    id: 2,
    dayOfTheWeek: 'Wednesday',
    completed: false,
    disabled: false
  },
  {
    id: 3,
    dayOfTheWeek: 'Thursday',
    completed: false,
    disabled: false
  },
  {
    id: 4,
    dayOfTheWeek: 'Friday',
    completed: false,
    disabled: false
  },
  {
    id: 5,
    dayOfTheWeek: 'Saturday',
    completed: false,
    disabled: false
  },
  {
    id: 6,
    dayOfTheWeek: 'Sunday',
    completed: false,
    disabled: false
  }
]

export const MOCK_HABITS: HabitType[] = [
  {
    id: 'first-habit-id',
    title: 'Workout',
    description: '30 min per day',
    totalOfDays: 21,
    category: 'health',
    completed: false,
    repeat: 'daily',
    currentDay: 0,
    createdAt:
      'Thu Mar 16 2023 18:31:24 GMT+0000 (hora estándar de Europa occidental)',
    weekProgress: WEEK_PROGRESS
  }
]
