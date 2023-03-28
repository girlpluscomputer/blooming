export const resolvers = {
  Query: {
    habits: async (_parent, _args, context) =>
      await context.prisma.habit.findMany(),
    users: async (_parent, _args, context) =>
      await context.prisma.user.findMany()
  }
}
