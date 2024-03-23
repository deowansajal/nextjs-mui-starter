'use client'

import { AppBar, Box, Toolbar, Button, Container } from '@mui/material'
import Link from 'next/link'
import Logo from '@/app/components/ui/Logo'
import { usePathname } from 'next/navigation'
import { palette } from '@/app/styles/theme'

type NavbarItemProps = {
  href: string
  children: React.ReactNode
  currentRoute?: string
}

function NavbarItem({ href, children, currentRoute }: NavbarItemProps) {
  return (
    <Button
      component={Link}
      href={href}
      variant='contained'
      disableElevation
      disableRipple
      sx={{
        backgroundColor:
          currentRoute === href ? palette.primary.dark : 'transparent',
      }}
    >
      {children}
    </Button>
  )
}

export default function Header() {
  const pathname = usePathname()

  const currentRoute = pathname

  return (
    <Box flexGrow={1}>
      <AppBar position='static'>
        <Container maxWidth='md'>
          <Toolbar>
            <Box flexGrow={1}>
              <Logo />
            </Box>
            <Box display={'flex'} columnGap={2}>
              <NavbarItem href={'/auth/login'} currentRoute={currentRoute}>
                Login
              </NavbarItem>
              <NavbarItem href={'/auth/signup'} currentRoute={currentRoute}>
                Sign Up
              </NavbarItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
