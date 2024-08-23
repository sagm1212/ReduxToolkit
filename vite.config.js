import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

 
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://randomuser.me', // Cambia esto a la URL de tu API
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ''), // Esto reescribirá la ruta
//       },
//     },
//   },
// });