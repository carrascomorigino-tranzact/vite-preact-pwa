import { ComponentChildren } from 'preact'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Box, List, ListItemButton, Toolbar } from '@mui/material'
import { ArrowLeft as ArrowLeftIcon } from '@mui/icons-material'

import {
  StyledAppBar,
  StyledIconButton,
  StyledTypography,
} from './HomeLayout.styles'
import appRoutePath from '../../routes/routes.enum'

const { dashboard, demoWithRoute, demoWithoutRoute } = appRoutePath

const HomeLayout = ({ children }: { children: ComponentChildren }) => {
  const { pathname } = useLocation()
  const [title, subTitle] = pathname.split('/').slice(1)

  const navigate = useNavigate()

  const goDashboard = () => {
    navigate(`${dashboard}`)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'grid', height: '100vh', width: '100%' }}>
        <StyledAppBar position="fixed">
          <Toolbar>
            {title ? (
              <>
                {title.toLowerCase() !==
                appRoutePath.dashboard.toLowerCase() ? (
                  <StyledIconButton
                    color="info"
                    size="small"
                    onClick={goDashboard}
                  >
                    <ArrowLeftIcon />
                  </StyledIconButton>
                ) : null}
                <StyledTypography noWrap component="h2" pl={1} variant="h6">
                  {decodeURI(subTitle || title).toUpperCase()}
                </StyledTypography>
              </>
            ) : null}
          </Toolbar>
        </StyledAppBar>
        <Box
          component="main"
          sx={{
            mt: 8,
            overflowX: 'hidden',
            overflowY: 'auto',
            p: 3,
            position: 'relative',
          }}
        >
          <List>
            <ListItemButton component={NavLink} to={demoWithRoute}>
              Demo with sub route
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to={`${demoWithRoute}/sub-route`}
            >
              Demo sub route
            </ListItemButton>
            <ListItemButton component={NavLink} to={demoWithoutRoute}>
              Demo without route
            </ListItemButton>
          </List>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default HomeLayout
