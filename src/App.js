import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Naslovna from "./Components/Naslovna";
import Likovi from "./Components/ObjektiLikova";
import Disney from "./Components/Disney";
import Oseriji from "./Components/Oseriji";
import Komentar from "./Components/Komentar";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/likovi" element={<Likovi />}></Route>
          <Route path="/disney" element={<Disney />}></Route>
          <Route path="/oseriji" element={<Oseriji />}></Route>
          <Route path="/komentar" element={<Komentar />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
