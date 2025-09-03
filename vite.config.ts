import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",  // Use "/" for custom domain, or "/Portfolio/" if deploying under repo URL
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'docs',           // output to /docs folder for GitHub Pages
    assetsInlineLimit: 0,     // prevent fonts/images from being inlined as base64
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? 'unknown'; // fallback if undefined
          if (/\.woff2?$/.test(name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));
