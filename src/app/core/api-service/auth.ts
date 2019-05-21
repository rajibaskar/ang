import { BasicProfile } from '../google-auth/basic-profile';
import { GoogleAuth } from '../google-auth/google-auth';

export class Auth {
  idKey: string;

  basicProfile: BasicProfile;

  googleAuth: GoogleAuth;
}
