import { WEEKDAYS } from '@/utils/constants'
import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { Log, LogStatus } from '@/graphql/generated/types'

import { DayProgress } from './DayProgress'

export interface HabitWeekProps {
  logs: Log[]
}

export const HabitWeekLogs = ({ logs }: HabitWeekProps) => {
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
          return (
            <DayProgress
              key={todaysLog.id}
              status={
                todaysLog.completed ? LogStatus.Completed : LogStatus.Initial
              }
            >
              {todaysLogWeekday.charAt(0)}
            </DayProgress>
          )
        } else {
          return (
            <DayProgress key={date} status={LogStatus.Expired}>
              {weekDay.charAt(0)}
            </DayProgress>
          )
        }
      })}
    </>
  )
}
