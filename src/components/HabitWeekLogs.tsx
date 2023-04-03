import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { LogType } from '@/views/Habits/types'
import { DayProgress } from './DayProgress'

export const HabitWeekLogs = ({ logs }: { logs: LogType[] }) => {
  let currentWeek = getCurrentWeek()

  return (
    <>
      {currentWeek.map(({ weekDay, date }) => {
        const log = logs.find(
          ({ createdAt }) =>
            new Date(Number(createdAt)).toLocaleDateString() === date
        )

        return !!log ? (
          <DayProgress
            id={log.id}
            key={log.id}
            weekDay={log.weekDay}
            disabled={log.disabled}
            completed={log.completed}
          />
        ) : (
          <DayProgress
            id={date}
            key={date}
            weekDay={weekDay}
            disabled
            completed={false}
          />
        )
      })}
    </>
  )
}
