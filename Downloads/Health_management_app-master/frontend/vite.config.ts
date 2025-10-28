import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react({
        // Enable Fast Refresh
        fastRefresh: true,
        // Optimize for production
        babel: {
          plugins: [['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]]
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      exclude: ['mongodb'],
      include: ['react', 'react-dom', 'react-router-dom']
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    server: {
      // Disable caching for development to ensure latest code runs
      headers: {
        'Cache-Control': 'no-store',
      },
    },
    build: {
      target: 'es2015', // Better mobile browser support
      cssTarget: 'chrome61', // Better CSS compatibility
      sourcemap: false, // Disable sourcemaps for smaller build
      minify: 'terser', // Use terser for better minification
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs in production
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug']
        }
      },
      rollupOptions: {
        external: [],
        output: {
          // Add hash to filenames to bust cache
          entryFileNames: `assets/[name].[hash].js`,
          chunkFileNames: `assets/[name].[hash].js`,
          assetFileNames: `assets/[name].[hash].[ext]`,
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
            'ui-vendor': ['lucide-react', '@radix-ui/react-icons'],
            'chart-vendor': ['recharts', 'chart.js']
          }
        }
      },
      chunkSizeWarningLimit: 1000
    }
  }
})