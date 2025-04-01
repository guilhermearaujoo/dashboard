export type RegistrationStatus = 'REVIEW' | 'APPROVED' | 'REJECTED'

export type RegistrationResult = {
  admissionDate: string
  email: string
  employeeName: string
  status: RegistrationStatus
  cpf: string
  id: string
}

export type NewRegistration = Omit<RegistrationResult, 'status' | 'id'>
