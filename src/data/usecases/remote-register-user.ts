import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { NewRegistration, RegistrationResult } from '@/domain/models'
import { RegisterUser } from '@/domain/usecases'

export class RemoteRegisterUser implements RegisterUser {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RegistrationResult>
  ) {}

  async register(params: NewRegistration): Promise<RegistrationResult> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return { ...httpResponse.body, status: 'REVIEW' }
      default:
        throw new UnexpectedError()
    }
  }
}
