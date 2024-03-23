import { Button, ButtonProps } from '@mui/material'

type Props = ButtonProps

export default function SubmitButton({ children, ...restProps }: Props) {
  return (
    <Button type='submit' variant='contained' fullWidth {...restProps}>
      {children}
    </Button>
  )
}
