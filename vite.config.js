import { defineConfig } from 'vite';
import { join } from "path";

export default defineConfig({
    root: join(__dirname, "src"),
    build: {
        rollupOptions: {
            output: {
                format: "es",
                strict: false,
                dir: join(__dirname, "dist"),
            }
        }
    }
})
