import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { LogStatus, LogType } from '@/views/Habits/types'
import { DayProgress } from './DayProgress'

export const HabitWeekLogs = ({ logs }: { logs: LogType[] }) => {
  let currentWeek = getCurrentWeek()

  return (
    <>
      <span>hey</span>
      {/* {currentWeek.map(({ weekDay, date }) => {
        const log = logs.find(
          ({ createdAt }) =>
            new Date(Number(createdAt)).toLocaleDateString() === date
        )

        return (
          <DayProgress
            id={log?.id}
            key={log?.id}
            weekDay={weekDay}
            status={log?.status}
          />
        )
      })} */}
    </>
  )
}
