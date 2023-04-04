import { WEEKDAYS } from '@/utils/constants'
import { getTomorrowDate } from '@/utils/getTomorrowDate'
import { LogStatus } from '@/views/Habits/types'

export const resolvers = {
  User: {
    habits: ({ id }, _args, context) =>
      context.prisma.habit.findMany({
        where: { userId: id }
      })
  },
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
    habits: (root, _args, context) => context.prisma.habit.findMany(),
    users: (root, _args, context) => context.prisma.user.findMany(),
    logs: (root, _args, context) => context.prisma.log.findMany()
  },
  Mutation: {
    createHabit: async (root, _args, context) =>
      await context.prisma.user.update({
        where: { id: _args.userId },
        data: {
          habits: {
            create: {
              title: _args.title,
              description: _args.description,
              totalOfDays: _args.totalOfDays,
              currentDay: _args.currentDay,
              category: _args.category,
              completed: _args.completed,
              logs: {
                create: {
                  expiresAt: getTomorrowDate(),
                  status: LogStatus.INITIAL
                }
              }
            }
          }
        },
        include: {
          habits: {
            include: {
              logs: true
            }
          }
        }
      })
  }
}
