import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api',
  documents: 'src/**/*.ts',
  generates: {
    './graphql/generated/types.ts/': {
      plugins: ['typescript'],
      preset: 'client'
    }
  }
}

export default config
