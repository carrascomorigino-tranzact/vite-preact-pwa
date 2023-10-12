import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import appRoutePath from './routes.enum'
import { DemoRoute } from '.'
import Dashboard from '../components/views/Dashboard'

const { dashboard, demoWithRoute, demoWithoutRoute } = appRoutePath

const DemoWithoutSubRoute = lazy(
  () => import('../components/views/DemoWithoutSubRoute')
)

const HomeRoute = () => {
  return (
    <Routes>
      <Route path={`${demoWithRoute}/*`} element={<DemoRoute />} />
      <Route
        path={demoWithoutRoute}
        element={
          <Suspense fallback={<>...</>}>
            <DemoWithoutSubRoute />
          </Suspense>
        }
      />
      <Route
        path={`${dashboard}/*`}
        element={
          <Suspense fallback={<>...</>}>
            <Dashboard />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to={dashboard} />} />
    </Routes>
  )
}

export default HomeRoute
