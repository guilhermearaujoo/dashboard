import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RegisterUser } from '@/domain/usecases'
import { RemoteRegisterUser } from '@/data/usecases'

export const makeRemoteRegisterUser = (): RegisterUser =>
  new RemoteRegisterUser(makeApiUrl('/registrations'), makeAxiosHttpClient())
