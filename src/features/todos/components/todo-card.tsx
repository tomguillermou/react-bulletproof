import { useParams } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { fetchTodo } from '../api/fetch-todo'

export function TodoCard() {
  const { id } = useParams()

  if (!id) return null

  const { data, isError, isPending, refetch } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <button onClick={() => refetch()}>Reload</button>
  }

  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">{data.title}</h2>
    </div>
  )
}
