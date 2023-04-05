import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'

import { habitModel, userModel, logModel } from './models'
import { habitResolver, userResolver, logResolver } from './resolvers'

const resolvers = mergeResolvers([habitResolver, userResolver, logResolver])
const typeDefs = mergeTypeDefs([habitModel, userModel, logModel])

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
