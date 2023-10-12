import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../components/views/Home'

const AppRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoute
