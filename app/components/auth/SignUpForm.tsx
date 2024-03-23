'use client'

import { Divider, Paper, Stack } from '@mui/material'
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
import signUpSchema, {
  signUpSchemaDefaultValues,
  type SignUpSchema,
} from '@/app/schemas/signUpSchema'
import GoogleAuthButton from '@/app/components/auth/GoogleAuthButton'

export default function SignUpForm() {
  const submitHandler = async (data: SignUpSchema) => {
    console.log(data)
  }

  return (
    <Paper
      sx={{ px: 3, py: 4, border: `solid 1px ${palette.primary.light}` }}
      elevation={5}
    >
      <FormContainer
        resolver={zodResolver(signUpSchema)}
        onSuccess={submitHandler}
        defaultValues={signUpSchemaDefaultValues}
      >
        <FormTitle>Sign Up</FormTitle>

        <Stack spacing={5}>
          <GoogleAuthButton>Sign Up with Google</GoogleAuthButton>
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

        <SubmitButton sx={{ mt: 3 }}>Sign Up</SubmitButton>

        <PageSwitcherButton
          href={'/auth/login'}
          text={'Already have an account?'}
          buttonText={'Login'}
        />
      </FormContainer>
    </Paper>
  )
}
