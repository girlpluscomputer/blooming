import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api',
  generates: {
    './graphql/generated/schemas.ts': {
      documents: './graphql/**/*.graphql',
      plugins: ['typescript']
    },
    './graphql/generated/operations.ts': {
      documents: './graphql/**/*.graphql',
      preset: 'import-types',
      presetConfig: {
        typesPath: './schemas'
      },
      plugins: ['typescript-operations']
    },
    './graphql/generated/hooks.ts': {
      documents: './graphql/**/*.graphql',
      preset: 'import-types',
      presetConfig: {
        typesPath: './operations'
      },
      plugins: ['typescript-react-apollo'],
      config: {
        withHooks: true
      }
    }
  }
}

export default config
