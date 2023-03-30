export const getTodayDateFormatted = () =>
  new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
