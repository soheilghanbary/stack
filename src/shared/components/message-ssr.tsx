'use cache: private'
import { cacheLife } from 'next/cache'
import { api } from '@/server/lib/orpc.client'

export const MessageSSR = async () => {
  cacheLife('days')
  const data = await api.hello()
  return (
    <div className="w-full">
      <span className="font-medium text-sm">Server Response</span>
      <pre className="mt-1 rounded-md bg-muted p-2 font-mono text-xs shadow-sm">
        {JSON.stringify(data)}
      </pre>
    </div>
  )
}
