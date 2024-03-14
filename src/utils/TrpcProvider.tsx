import {trpc} from './trpc.ts'
import superjson from 'superjson'
import {httpBatchLink} from '@trpc/client'
import useAuth from '../hooks/useAuth.ts'
import React, {FC, useEffect, useState} from 'react'
import {QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query'


export const TrpcProvider: FC<{ children: React.ReactNode }> = ({children}) => {
	const {authToken, logout} = useAuth()
	
	
	const [queryClient] = useState(() => new QueryClient({
		
		queryCache: new QueryCache({
			// onError: (error) => {
			//
			// 	// @ts-ignore
			// 	if (error.data.code === 'UNAUTHORIZED') logout()
			// },
			
			// retry: (failureCount, error) => {
			//
			// 	if (error.data.code === 'UNAUTHORIZED') {
			// 		logout()
			// 		return false
			// 	}
			// 	return true
			//
			// }
		})
		,
		
	}))
	
	const trpcClient = () =>
		trpc.createClient({
			transformer: superjson,
			
			links: [
				// @ts-ignore
				httpBatchLink({
					url: '/trpc',
					headers: async () => ({
						'Access-Control-Allow-Methods': 'GET,POST',
						'Access-Control-Allow-Headers': 'authorization',
						authorization: authToken
					}),
					
					// fetch(url, options) {
					// 	return fetch(url,
					// 		{
					// 		...options,
					// 		// credentials: 'include',
					// 		// headers: {
					// 		//
					// 		// 	"Access-Control-Allow-Methods": "GET,POST",
					// 		// 	"Access-Control-Allow-Headers": "authorization",
					// 		// 	"authorization": `Bearer ${authToken}`
					// 		// }
					// 	})
					// }
					// optional
					// headers() {
					// 	return {
					// 		authorization: getAuthCookie(),
					// 	};
					// },
				}),
			],
		})
	
	
	return (
		<trpc.Provider client={trpcClient()} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</trpc.Provider>
	)
}