import type { MetadataRoute } from 'next'
import { appConfig } from '@/config'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: appConfig.title,
		short_name: appConfig.name,
		description: appConfig.description,
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
