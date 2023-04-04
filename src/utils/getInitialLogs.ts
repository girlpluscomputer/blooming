import { LogStatus } from '@/views/Habits/types'
import { getFutureDate } from './getFutureDate'

export const getInitialLogs = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    expiresAt: getFutureDate(index + 1),
    status: LogStatus.INITIAL
  }))
