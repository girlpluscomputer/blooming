import { LogType } from '@/views/Habits/types'
import { getFutureDate } from './getFutureDate'

export const getInitialLogs = (
  length: number
): Pick<LogType, 'expiresAt' | 'completed'>[] =>
  Array.from({ length }).map((_, index) => ({
    expiresAt: getFutureDate(index + 1),
    completed: false
  }))
