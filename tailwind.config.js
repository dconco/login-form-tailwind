/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.html", "src/**/*.htm"],
	theme: {
		extend: {
			backgroundImage: {
				"cover-image": "url('/src/assets/bg.jpeg')",
			},
		},
	},
	plugins: [],
};
