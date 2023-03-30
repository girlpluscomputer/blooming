export const getCurrentWeek = () => {
  let today = new Date()
  let week = []

  for (let i = 0; i < 7; i++) {
    let first = today.getDate() - today.getDay() + i

    let weekDay = new Date(today.setDate(first))

    week.push(weekDay)
  }

  return week
}
