/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.{html,js,ejs}", "./public/**/*.{html,js,ejs}"],
	theme: {
		extend: {
			boxShadow: {
				navbarButton: "0px 0px 0px 4px rgba(107, 114, 128)",
			},
			minHeight: {
				16: "4rem",
			},
		},
	},
	plugins: [],
};
