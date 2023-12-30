import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Example from './collections/Example'
import { AdminComponents } from './ui/Admin'
import Content from './collections/Content'
import Artwork from './collections/Artwork'
import Nav from './globals/Nav'
import Pages from './collections/Pages'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: AdminComponents,
    meta: {
      favicon: '/assets/favicon1.ico',
      titleSuffix: '- Frontoship',
    }
  },
  editor: slateEditor({}),
  collections: [Users, Pages, Example, Content, Artwork],
  globals: [Nav],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    }
  })
})
