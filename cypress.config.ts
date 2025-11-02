import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: process.env.BASE_URL,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'webpack'
		}
	}
})
