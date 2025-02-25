import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from '@/components/layout'

import { HomePage } from './routes/home'
import { LoginPage } from './routes/login'
import { TodoViewPage } from './routes/todos/id'
import { TodoListPage } from './routes/todos/list'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="todos">
            <Route index element={<TodoListPage />} />
            <Route path=":id" element={<TodoViewPage />} />
          </Route>
        </Route>

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
