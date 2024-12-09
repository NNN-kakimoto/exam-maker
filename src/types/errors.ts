export class BadRequestError {
  constructor(public messages: string[]) {}
}

export class MethodNotAllowedError {
  constructor(public message: string = '不正なリクエストです') {}
}
