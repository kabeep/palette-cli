import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
    entry: ['bin/cli.ts'],
    format: 'esm',
    outDir: 'dist',
    target: 'node16',
    bundle: true,
    clean: !opts.watch,
    minify: false,
    treeshake: !opts.watch,
    sourcemap: false,
    splitting: false,
    cjsInterop: true,
    legacyOutput: false,
    replaceNodeEnv: true,
    dts: true,
    shims: true,
    banner: ({ format }) => {
        const hashbang = '#!/usr/bin/env node';
        if (format === 'cjs') return { js: hashbang };

        return {
            js: `${hashbang}
                 import { createRequire } from 'module';
                 const require = createRequire(import.meta.url);`,
        };
    },
}));
