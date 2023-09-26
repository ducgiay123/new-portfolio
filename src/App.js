import "./App.css";
import EmbedGame from "./pages/EmbedGame";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Todo from "./pages/ToDo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/embedgame" element={<EmbedGame />} />
        <Route path="/video" element={<EmbedGame />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
