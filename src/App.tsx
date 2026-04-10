import { useState } from "react";
import Layout from "./Layout.tsx";

function App() {
  const [user, setUser] = useState<string | null>(null);

  const login = () => setUser("Abdullah");
  const logout = () => setUser(null);

  return (
    <Layout user={user} login={login} logout={logout} />
  );
}

export default App;