import { BrowserRouter, Route, Routes } from "react-router-dom"
import Income from "./Pages/Income"
import Expense from "./Pages/Expense"

  
function App() {
 

  return (
     <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Income/>}/>
              <Route path="/expense" element={<Expense/>}/>
          </Routes>
        </BrowserRouter>
     </div>
  )
}

export default App
