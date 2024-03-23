import { Box, Button, Link } from '@mui/material'

type Props = {
  href: string
  text: string
  buttonText: string
}

export default function PageSwitcherButton(props: Props) {
  const { href, text, buttonText } = props

  return (
    <Box
      display={'flex'}
      gap={1}
      fontSize={'small'}
      justifyItems={'center'}
      alignItems={'center'}
      mt={2}
    >
      <Box>{text}</Box>
      <Button
        component={Link}
        variant='text'
        size='small'
        disableRipple
        fullWidth={false}
        sx={{
          textTransform: 'none',
        }}
        href={href}
      >
        {buttonText}
      </Button>
    </Box>
  )
}
