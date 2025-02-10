import { Link, Outlet } from 'react-router'

export function Layout() {
  return (
    <>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/login">Login</Link>
      </div>

      <Outlet />
    </>
  )
}
