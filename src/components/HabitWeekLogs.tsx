import { getCurrentWeek } from '@/utils/getCurrentWeek'
import { LogType } from '@/views/Habits/types'

export const HabitWeekLogs = ({ logs = [] }: { logs: LogType[] }) => {
  // console.table('logs', logs)
  let currentWeek = getCurrentWeek()

  // console.table(getCurrentWeek())
  logs.map(({ createdAt }) => {
    let date = new Date(Number(createdAt)).toLocaleDateString()
  })

  return <span>x</span>
}
