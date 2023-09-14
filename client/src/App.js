import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './Components/View';
import Add from './Components/Add';
import Nave from './Nave'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nave />}>
            <Route index element={<View />} />
            <Route path="/add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
