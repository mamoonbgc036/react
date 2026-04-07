import { UserContext } from "./context/UserContext";
import Profile from "./pages/Profile";
import Footer from './pages/Footer';

function App() {
  const user = "Mamoon";

  return (
    <UserContext.Provider value={user}>
      <Profile />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;