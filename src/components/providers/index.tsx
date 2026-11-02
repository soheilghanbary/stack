'use client'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { type PropsWithChildren, useState } from 'react'
import { Toaster } from '../ui/toast'

const QueryProvider = ({ children }: PropsWithChildren) => {
	const [queryClient] = useState(() => new QueryClient())
	const dehydratedState = dehydrate(queryClient)
	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}

export default function Providers({ children }: PropsWithChildren) {
	return (
		<NuqsAdapter>
			<QueryProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
				</ThemeProvider>
			</QueryProvider>
		</NuqsAdapter>
	)
}
