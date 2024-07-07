import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '73rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        plt: {
          base: '#faedcd',
          nav: '#d4a373',
          btn: '#e7c8a0',
          hv: '#fefae0',
          txt: '#7d5026',
          post: '#f9f9f9'
        }
      },
      fontFamily: {
        sofia: ['var(--font-sofia)', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
