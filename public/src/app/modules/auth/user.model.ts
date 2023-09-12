export class User {
  constructor(
    public email: string,
    public id: number,
    private _token: string | null,
    private _role: string
  ) {}

  get token(): string | null {
    return this._token;
  }

  get role(): string {
    return this._role;
  }
}
