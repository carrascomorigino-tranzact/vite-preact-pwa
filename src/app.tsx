import { AppRoute } from './routes'
import AppThemeProvider from './AppThemeProvider'

function App() {
  return (
    <AppThemeProvider>
      <AppRoute />
    </AppThemeProvider>
  )
}

export default App
