export const logResolver = {
  Log: {
    habit: async ({ id }, _, context) => {
      const prismaLog = await context.prisma.log.findUnique({
        where: { id: id }
      })

      return context.prisma.habit.findUnique({
        where: { id: prismaLog.habitId }
      })
    }
  },
  Query: {
    logs: (root, _args, context) => context.prisma.log.findMany()
  },
  Mutation: {}
}
