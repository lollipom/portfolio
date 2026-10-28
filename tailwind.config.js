/** Tailwind CSS v3 config. Rebuild assets/site.css after changing classes in index.html (see README). */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
        blue: { 50: '#eff6ff', 100: '#dbeafe', 600: '#2563eb', 700: '#1d4ed8' },
        notion: { bg: '#191919', text: '#D4D4D4', card: '#2F2F2F', border: '#373737' }
      }
    }
  }
};
