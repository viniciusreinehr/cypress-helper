import ErrorTypesInterface from '../interfaces/error-types.interface'

export default class InternalError extends Error {
  constructor(errorType: ErrorTypesInterface, ...params: string[]) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InternalError)
    }

    this.name = '[cypress-file-upload error]'
    this.message = `${errorType.message}.\n${errorType.tip}`
  }
}
