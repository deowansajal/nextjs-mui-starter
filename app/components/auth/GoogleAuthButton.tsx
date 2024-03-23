import { Button, ButtonProps } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

type Props = ButtonProps

export default function GoogleAuthButton(props: Props) {
  const { children, ...restProps } = props
  return (
    <Button
      fullWidth
      variant='outlined'
      startIcon={<GoogleIcon />}
      {...restProps}
    >
      {children}
    </Button>
  )
}
