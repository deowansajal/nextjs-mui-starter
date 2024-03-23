import { Typography, TypographyProps } from '@mui/material'

type Props = TypographyProps

export default function FormTitle({ children, ...restProps }: Props) {
  return (
    <Typography variant={'h4'} textAlign={'center'} mb={5} {...restProps}>
      {children}
    </Typography>
  )
}
