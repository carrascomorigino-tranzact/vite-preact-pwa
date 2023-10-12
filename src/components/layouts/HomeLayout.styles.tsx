import {
  AppBar,
  styled,
  Typography,
  TypographyProps,
  IconButton,
} from '@mui/material'

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.info.light,
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: `${theme.palette.info.dark} !important`,
}))

export const StyledTypography = styled(Typography)<
  TypographyProps & { component: string }
>(({ theme }) => ({
  color: theme.palette.info.dark,
}))
