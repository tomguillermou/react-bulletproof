import { Todo } from '../types/todo'

export async function fetchTodo(id: string): Promise<Todo> {
  const url = new URL(`https://jsonplaceholder.typicode.com/todos/${id}`)

  const response = await fetch(url)

  return response.json()
}
