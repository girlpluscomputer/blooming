import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/api',
  generates: {
    'src/graphql/generated/types.ts': {
      documents: 'src/graphql/**/*.graphql',
      plugins: ['typescript']
    },
    'src/graphql/generated/operations.ts': {
      documents: 'src/graphql/**/*.graphql',
      preset: 'import-types',
      presetConfig: {
        typesPath: './schemas'
      },
      plugins: ['typescript-operations']
    },
    'src/graphql/generated/hooks.ts': {
      documents: 'src/graphql/**/*.graphql',
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
