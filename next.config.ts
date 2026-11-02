import { withRedact } from '@tanstack/redact/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	cacheComponents: true,
	partialPrefetching: true,
	reactCompiler: true,
	experimental: {
		typedEnv: true,
		turbopackRustReactCompiler: true,
	},
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css',
			},
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
}

export default withRedact(nextConfig)
