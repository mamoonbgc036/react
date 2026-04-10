import { useState } from 'react'
import Layout from './Layout.tsx'

export default function App() {
  const [user, setUser] = useState<string | null>(null)
  const login = () => setUser("abdullah")
  const logout = () => setUser(null)
  return (
    <Layout user={user} login={login} logout={logout} />
  )

}