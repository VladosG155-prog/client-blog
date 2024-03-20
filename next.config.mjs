/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const withNextIntl = createNextIntlPlugin()

const __dirname = dirname(fileURLToPath(import.meta.url))
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
    additionalData: '@import "./src/app/styles/_variables.scss";'
  }
}

export default withNextIntl(nextConfig)
