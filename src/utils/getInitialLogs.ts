import { getFutureDate } from './getFutureDate'

export const getInitialLogs = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    expiresAt: getFutureDate(index + 1),
    completed: false
  }))
