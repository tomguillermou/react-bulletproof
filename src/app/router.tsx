import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from '@/components/layout'

import { HomePage } from './routes/home'
import { LoginPage } from './routes/login'
import { TodosPage } from './routes/todos'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
