import { useSearchParams } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { fetchTodos } from '../api/fetch-todos'
import { SearchBar } from './searchbar'

export function TodoList() {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')?.toString()

  const { data, error, isPending } = useQuery({
    queryKey: ['todos', search],
    queryFn: () => fetchTodos(search),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <ul>
      <SearchBar />

      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
