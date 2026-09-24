import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LIGHT_THEME } from "./constants/theme";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={theme === LIGHT_THEME ? "app light" : "app dark"}>
      <Navbar />
      <TaskManager />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;