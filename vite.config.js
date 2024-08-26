import {resolve} from 'path'
import {defineConfig} from 'vite'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'

const _dirname = typeof __dirname !== 'undefined'
    // eslint-disable-next-line no-undef
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))
export default defineConfig({
    plugins: [basicSsl(), react()],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(_dirname, 'lib/main.jsx'),
            name: 'WebserialViews',
            // the proper extensions will be added
            fileName: 'webserial-views',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'webserial'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    webserial: 'WebSerial',
                },
            },
        },
    },
})
