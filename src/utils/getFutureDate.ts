export const getFutureDate = (daysInTheFuture: number) => {
  const futureDate = new Date()

  futureDate.setDate(futureDate.getDate() + daysInTheFuture)

  return futureDate
}
