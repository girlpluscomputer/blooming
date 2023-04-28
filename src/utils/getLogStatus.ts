// import { LogStatus } from '@/views/Habits/types'

export const getLogStatus = (completed: boolean, expiresAt: string) => {
  const isExpired = new Date(Number(expiresAt)) < new Date()

  // if (!completed && !isExpired) {
  //   return LogStatus.INITIAL
  // }
  // if (completed) {
  //   return LogStatus.COMPLETED
  // }
  // if (isExpired && !completed) {
  //   return LogStatus.EXPIRED
  // }
}
