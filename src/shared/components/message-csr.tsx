'use client'
import { useQuery } from '@tanstack/react-query'
import { client } from '@/server/lib/orpc.client'

export const MessageCSR = () => {
  const { data, isLoading } = useQuery(client.hello.queryOptions())
  if (isLoading) return <p>Loading Data...</p>
  return (
    <div className="w-full">
      <span className="font-medium text-sm">Client Response</span>
      <pre className="mt-1 rounded-md bg-muted p-2 font-mono text-xs shadow-sm">
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}
