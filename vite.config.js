import path from 'pathe'
import {defineConfig} from 'vite'


export default defineConfig({
    // @ts-ignore
    test: {
      clearMocks: true,
      mockReset: true,
      setupFiles: [path.join(__dirname, './vitest.setup.js')],
    },
})
