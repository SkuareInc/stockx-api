export class ItemNotFoundException extends Error {
  constructor() {
    super('Item not found');
  }
}

export class ParsingException extends Error {
  constructor() {
    super('Unavailable parsing, package need a update to match wanted result');
  }
}
