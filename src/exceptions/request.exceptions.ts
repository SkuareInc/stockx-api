export class InvalidInputException extends Error {
  constructor() {
    super('Invalid Input');
  }
}

export class ForbidenException extends Error {
  constructor() {
    super('Forbiden, server request captcha');
  }
}

export class InvalidLoginException extends Error {
  constructor() {
    super('Invalid Login');
  }
}
export class UnknowException extends Error {}
