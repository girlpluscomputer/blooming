export const resolvers = {
  Query: {
    habits: async (_parent, _args, context) =>
      await context.prisma.habit.findMany()
  }
}
