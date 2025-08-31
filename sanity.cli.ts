import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '3c72u4l6',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  // Optional: set a custom Studio host name
  // studioHost: 'artemovasbeauty',
})