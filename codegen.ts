import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api',
  documents: 'src/**/*.ts',
  generates: {
    './graphql/generated/': {
      plugins: ['typescript', 'typescript-resolvers'],
      preset: 'client',
      config: { withHooks: false }
    }
  }
}

export default config
