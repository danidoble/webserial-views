import {defineConfig} from 'vite'
import { dirname, resolve } from 'node:path'
import {fileURLToPath} from 'node:url'
import react from '@vitejs/plugin-react-swc'
import basicSsl from '@vitejs/plugin-basic-ssl'

const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
    plugins: [basicSsl(), react()],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: {
                "webserial-views": resolve(__dirname, 'lib/main.jsx'),
                "serial-views": resolve(__dirname, 'lib/secondary.jsx'),
            },
            // entry: resolve(_dirname, 'lib/main.jsx'),
            name: 'WebserialViews',
            // the proper extensions will be added
            // fileName: 'webserial-views',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['react', '@danidoble/webserial'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React',
                    '@danidoble/webserial': 'WebSerial',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'webserial-views.css';
                    return assetInfo.name;
                }
            },
        },
    },
})
