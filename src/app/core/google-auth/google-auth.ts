export interface GoogleAuth {
  token: string;
  accessToken: string;
  scope: string;
  firstIssuedAt: number;
  expiresAt: number;
  expiresIn: number;
  idToken: string;
  loginHint: string;
}
