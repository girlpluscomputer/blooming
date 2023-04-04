import path from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

import { habitModel, userModel, logModel } from '../graphql/models'

const resolverFiles = loadFilesSync(path.join(__dirname, 'resolvers'))

const resolvers = mergeResolvers(resolverFiles)
const typeDefs = [userModel, habitModel, logModel]

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
