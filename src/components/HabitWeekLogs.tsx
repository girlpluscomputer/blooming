import { WEEKDAYS } from '@/utils/constants'
import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { LogStatus, LogType } from '@/views/Habits/types'

import { DayProgress } from './DayProgress'

export const HabitWeekLogs = ({ logs }: { logs: LogType[] }) => {
  let currentWeek = getCurrentWeek()

  return (
    <>
      {currentWeek.map(({ date, weekDay }) => {
        const todaysLog = logs.find(
          ({ expiresAt }) =>
            new Date(Number(expiresAt)).toLocaleDateString() === date
        )

        const todaysLogWeekday =
          WEEKDAYS[new Date(Number(todaysLog?.expiresAt)).getDay()]

        if (todaysLog) {
          console.log(
            'log completed',
            todaysLog.completed,
            new Date(Number(todaysLog.expiresAt)).toLocaleDateString()
          )
          return (
            <DayProgress
              key={todaysLog.id}
              status={
                todaysLog.completed ? LogStatus.COMPLETED : LogStatus.INITIAL
              }
            >
              {todaysLogWeekday.charAt(0)}
            </DayProgress>
          )
        } else {
          return (
            <DayProgress key={date} status={LogStatus.DISABLED}>
              {weekDay.charAt(0)}
            </DayProgress>
          )
        }
      })}
    </>
  )
}
