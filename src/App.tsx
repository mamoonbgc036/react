import { UserContext } from "./context/UserContext";
import Profile from "./pages/Profile";

function App() {
  const user = "Mamoon";

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;