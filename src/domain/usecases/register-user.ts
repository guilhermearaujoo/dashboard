import { NewRegistration, RegistrationResult } from '@/domain/models'

export interface RegisterUser {
  register: (params: NewRegistration) => Promise<RegistrationResult>
}
