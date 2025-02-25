import { Link, useSearchParams } from 'react-router'

import { useQuery } from '@tanstack/react-query'

import { fetchTodos } from '../api/fetch-todos'
import { SearchBar } from './searchbar'

export function TodoList() {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')?.toString()

  const { data, isError, isPending, refetch } = useQuery({
    queryKey: ['todos', search],
    queryFn: () => fetchTodos(search),
  })

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <button onClick={() => refetch()}>Reload</button>
  }

  return (
    <ul>
      <SearchBar />

      {data.map((todo) => (
        <li key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </li>
      ))}
    </ul>
  )
}
