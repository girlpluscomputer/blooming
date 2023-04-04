import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { LogType } from '@/views/Habits/types'

import { DayProgress } from './DayProgress'

export const HabitWeekLogs = ({ logs }: { logs: LogType[] }) => {
  let currentWeek = getCurrentWeek()

  return (
    <>
      {currentWeek.map(({ date }) => {
        // const log = logs.find(
        //   ({ createdAt }) =>
        //     new Date(Number(createdAt)).toLocaleDateString() === date
        // )

        return <DayProgress key={date} />
      })}
    </>
  )
}
