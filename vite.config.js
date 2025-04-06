import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL for GitHub Pages deployment
  base: '/',  // This should be '/' for username.github.io repositories
  
  // Base directory for the project
  root: './',
  
  // Directory for static assets that don't need processing
  publicDir: 'public',
  
  // Build configuration
  build: {
    // Output directory for the build
    outDir: './dist',
    
    // Directory for assets in the build output
    assetsDir: 'assets',
    
    // Empty the output directory before building
    emptyOutDir: true,
    
    // Configure how assets are handled
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        // Ensure assets are properly handled
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
  // Add this section to handle SQL files
  assetsInclude: ['**/*.sql'],
  // Resolve configuration
  resolve: {
    // Aliases for easier imports
    alias: {
      '@': '/src',
      '@js': '/src/js',
      '@css': '/src/css',
      '@lib': '/lib',
      '@assets': '/assets',
    },
  },
  
  // Configure how different file types are processed
  plugins: [
    {
      name: 'sql-loader',
      transform(code, id) {
        if (id.endsWith('.sql')) {
          return {
            code: `export default ${JSON.stringify(code)}`,
            map: null
          };
        }
      }
    }
  ],
});