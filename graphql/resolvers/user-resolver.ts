export const userResolver = {
  User: {
    habits: ({ id }, _args, context) =>
      context.prisma.habit.findMany({
        where: { userId: id }
      })
  },
  Query: {
    users: (root, _args, context) => context.prisma.user.findMany()
  },
  Mutation: {}
}
