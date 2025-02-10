import { Todo } from '../types/todo'

export async function fetchTodos(search?: string): Promise<Todo[]> {
  const url = new URL(`https://jsonplaceholder.typicode.com/todos`)

  if (search) {
    url.searchParams.set('q', search)
  }

  const response = await fetch(url)

  return response.json()
}
