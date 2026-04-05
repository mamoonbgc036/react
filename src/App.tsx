import { AuthProvider } from "./context/AuthContext";
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Dashboard />
    </AuthProvider>
  );
}