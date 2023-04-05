import { getInitialLogs } from '@/utils/getInitialLogs'

export const habitResolver = {
  Habit: {
    user: async ({ id }, _, context) => {
      const prismaHabit = await context.prisma.habit.findUnique({
        where: { id: id }
      })

      return context.prisma.user.findUnique({
        where: { id: prismaHabit.userId }
      })
    },
    logs: ({ id }, _, context) =>
      context.prisma.log.findMany({
        where: { habitId: id }
      })
  },
  Query: {
    habits: (root, _args, context) => context.prisma.habit.findMany()
  },
  Mutation: {
    createHabit: async (root, _args, context) =>
      await context.prisma.habit.create({
        data: {
          title: _args.title,
          description: _args.description,
          totalOfDays: _args.totalOfDays,
          currentDay: _args.currentDay,
          category: _args.category,
          completed: _args.completed,
          userId: _args.userId,
          logs: {
            createMany: {
              data: getInitialLogs(_args.totalOfDays)
            }
          }
        }
      })
  }
}
