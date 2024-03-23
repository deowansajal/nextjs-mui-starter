import { Container } from '@mui/material'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxWidth={'xs'}
      sx={{
        mt: {
          xs: 5,
          md: 10,
        },
      }}
    >
      {children}
    </Container>
  )
}
