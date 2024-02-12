import { defineConfig } from 'vite';
import { join, resolve } from "path";
import { glob } from "glob";
import handlebars from 'vite-plugin-handlebars';

import { pageData } from './scripts/pageData';

export default defineConfig({
    root: join(__dirname, "src"),
    build: {
        rollupOptions: {
            input: glob.sync(resolve(__dirname, "src", "**/*.html")),
            output: {
                format: "es",
                strict: false,
                dir: join(__dirname, "dist"),
            }
        }
    },
    publicDir: join(__dirname, "static"),
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/components'),
            context(pagePath) {
                return pageData[pagePath];
            },
            helpers: {
                add_quotes: (value) => `"${value}"`,
            },
        }),
    ],
})
