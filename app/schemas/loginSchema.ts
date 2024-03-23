import { z } from 'zod'

export const loginSchemaDefaultValues = {
  email: '',
  password: '',
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Please provide an valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .max(100, {
      message: 'Password must be less than or equal 100 characters',
    }),
})

export type LoginSchema = z.infer<typeof loginSchema>

export default loginSchema
