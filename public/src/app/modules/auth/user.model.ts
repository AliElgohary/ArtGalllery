export class User {
  constructor(
    public email: string,
    public id: number,
    private _token: string,
    private _role: string
  ) {}
  get token(): string | null {
    if (!this._token) {
      return null;
    }
    return this._token;
  }
  get role(): string {
    return this._role;
  }
}
