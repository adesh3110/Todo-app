import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreateTodo from "./pages/create-todo";
import Listing from "./pages/listing";
import UpdateTodo from "./pages/update-todo";
import HomePage from "./pages/homepaeg.";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todos' element={<Listing />} />
          <Route path='create' element={<CreateTodo />} />
          <Route path='update/:id' element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
