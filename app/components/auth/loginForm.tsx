'use client'

import { Box, Divider, Paper, Stack } from '@mui/material'
import {
  FormContainer,
  PasswordElement,
  TextFieldElement,
} from 'react-hook-form-mui'
import { zodResolver } from '@hookform/resolvers/zod'

import { palette } from '@/app/styles/theme'
import FormTitle from '@/app/components/ui/FormTitle'
import SubmitButton from '@/app/components/ui/SubmitButton'
import PageSwitcherButton from '@/app/components/auth/AuthPageSwitcherButton'
import ForgotPasswordButton from './ForgotPasswordButton'
import loginSchema, {
  loginSchemaDefaultValues,
  type LoginSchema,
} from '@/app/schemas/loginSchema'
import GoogleAuthButton from './GoogleAuthButton'

export default function LoginForm() {
  const submitHandler = async (data: LoginSchema) => {
    console.log(data)
  }

  return (
    <Paper
      sx={{ px: 3, py: 4, border: `solid 1px ${palette.primary.light}` }}
      elevation={5}
    >
      <FormContainer
        resolver={zodResolver(loginSchema)}
        onSuccess={submitHandler}
        defaultValues={loginSchemaDefaultValues}
      >
        <FormTitle>Login</FormTitle>

        <Stack spacing={5}>
          <GoogleAuthButton>Login with Google</GoogleAuthButton>
          <Divider>or</Divider>
          <TextFieldElement
            name='email'
            type='email'
            label='Email'
            placeholder='johndoe@example.com'
          />

          <PasswordElement
            name='password'
            type='password'
            label='Password'
            placeholder='Enter your password'
          />
        </Stack>
        <Box textAlign={'end'} my={1.5}>
          <ForgotPasswordButton />
        </Box>

        <SubmitButton>Sign In</SubmitButton>

        <PageSwitcherButton
          href={'/auth/signup'}
          text={"Don't have an account?"}
          buttonText={'Sign Up'}
        />
      </FormContainer>
    </Paper>
  )
}
