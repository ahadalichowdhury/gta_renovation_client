import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Website } from "./pages/Website";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Website />}></Route>
       
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
