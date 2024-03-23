import { z } from 'zod'
import loginSchema from './loginSchema'

export const signUpSchemaDefaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

const signUpSchema = loginSchema.extend({
  confirmPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(100, {
      message: 'Password must be less than or equal 100 characters',
    }),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export default signUpSchema
