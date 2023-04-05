import { getLogStatus } from '@/utils/getLogStatus'

export enum LogStatus {
  INITIAL = 'INITIAL',
  COMPLETED = 'COMPLETED',
  EXPIRED = 'EXPIRED'
}

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
    logs: async (root, _args, context) => {
      const logs = await context.prisma.log.findMany()

      return logs.map(log => ({
        ...log,
        status: getLogStatus(log.completed, log.expiredAt)
      }))
    },
    log: (root, _args, context) =>
      context.prisma.log.findUnique({
        where: { id: _args.logId }
      })
  },
  Mutation: {}
}
