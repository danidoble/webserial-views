const prefix = import.meta.env.VITE_PREFIX ?? 'ws';

/** @type {import('tailwindcss').Config} */
export default {
    prefix: `${prefix}-`,
    darkMode: "class",
    content: [
        "./index.html",
        "./lib/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [

    ],
}
