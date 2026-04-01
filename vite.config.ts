import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".trycloudflare.com"],
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: [".trycloudflare.com"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable source maps in production — prevents exposing original source code
    sourcemap: false,
    // Aggressive minification with identifier mangling
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove all console.* calls in production
        drop_console: true,
        drop_debugger: true,
        // Remove dead code
        dead_code: true,
        passes: 2,
      },
      mangle: {
        // Mangle all variable/function names
        toplevel: true,
      },
      format: {
        // Remove comments
        comments: false,
      },
    },
    // Split chunks for better caching & smaller initial bundle
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tabs'],
        },
      },
    },
  },
}));
