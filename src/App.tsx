import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./views/Layout";
import Home from "./views/Home";
import ViewToDos from "./views/ViewToDos";
import CreateToDo from "./views/CreateToDo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<ViewToDos />} />
          <Route path="todos/create" element={<CreateToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
