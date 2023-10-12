import { createContext, ComponentChildren } from 'preact'
import { useMemo, useState } from 'preact/hooks'

import { useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type modeType = 'light' | 'dark' | 'auto'
type themeModeType = 'light' | 'dark'

const localStorageThemeModeKey = 'vite-preact-pwa.thememode'
const initialThemeMode =
  localStorage.getItem(localStorageThemeModeKey) || 'light'

interface AppThemeContextParams {
  mode: modeType
  themeMode: themeModeType
  switchNextThemeMode: (() => void) | undefined
}

export const AppThemeContext = createContext<AppThemeContextParams>({
  mode: 'auto',
  themeMode: 'light',
  switchNextThemeMode: undefined,
})

const AppThemeProvider = ({ children }: { children: ComponentChildren }) => {
  const [mode, setMode] = useState<modeType>(initialThemeMode as modeType)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const autoMode = prefersDarkMode ? 'dark' : 'light'
  const themeMode = mode === 'auto' ? autoMode : mode

  const value = useMemo(
    (): AppThemeContextParams => ({
      mode,
      themeMode,
      switchNextThemeMode: () => {
        let nextMode = 'light' as modeType

        if (mode === 'light') nextMode = 'auto'
        if (mode === 'auto') nextMode = 'dark'
        if (mode === 'dark') nextMode = 'light'

        setMode(nextMode)
        localStorage.setItem(localStorageThemeModeKey, nextMode)
      },
    }),
    [mode, autoMode]
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          info: {
            main: '#EFB810', // gold
          },
          primary: {
            main: '#85BB65', // dollar
          },
          secondary: {
            main: '#5D7EA7', // euro
          },
          error: {
            main: '#B76E79', // gold pink
          },
          success: {
            main: '#9AC5DB', // diamond
          },
          warning: {
            main: '#C0C0C0', // silver
          },
        },
      }),
    [prefersDarkMode, mode]
  )

  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider
