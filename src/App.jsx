import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import CardDetail from "./components/CardDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:countryName" element={<CardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
