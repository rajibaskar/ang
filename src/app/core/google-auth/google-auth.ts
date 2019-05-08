export interface GoogleAuth {
  token: string;
  access_token: string;
  scope: string;
  first_issued_at: Date;
  expires_at: Date;
  expires_in: number;
  id_token: string;
  login_hint: string;
}
