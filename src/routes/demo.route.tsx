import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const DemoWithSubRoute = lazy(
  () => import('../components/views/DemoWithSubRoute')
)
const DemoSubRoute = lazy(() => import('../components/views/DemoSubRoute'))

const DemoRoute = () => (
  <Routes>
    <Route
      path={':subroute'}
      element={
        <Suspense fallback={<>...</>}>
          <DemoSubRoute />
        </Suspense>
      }
    />
    <Route
      index
      element={
        <Suspense fallback={<>...</>}>
          <DemoWithSubRoute />
        </Suspense>
      }
    />
  </Routes>
)

export default DemoRoute
