import { WEEKDAYS } from './constants'

export type WeekType = {
  weekDay: string
  date: string
}

export const getCurrentWeek = (): WeekType[] => {
  let today = new Date()
  let week: WeekType[] = []

  for (let i = 0; i < 7; i++) {
    let first = today.getDate() - today.getDay() + i

    let dateObject = new Date(today.setDate(first))
    let date = dateObject.toLocaleDateString()
    let weekDay = WEEKDAYS[dateObject.getDay()]

    week.push({
      weekDay,
      date
    })
  }

  return week
}
