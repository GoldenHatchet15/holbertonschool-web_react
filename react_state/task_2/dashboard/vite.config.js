import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/holbertonschool-web_react/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'], // Support both .js and .jsx
  },
});
