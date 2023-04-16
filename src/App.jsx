import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import CardDetail from "./components/CardDetail"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:countryName" element={<CardDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
