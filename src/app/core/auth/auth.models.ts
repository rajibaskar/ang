import { BasicProfile } from '../google-auth/basic-profile';
import { GoogleAuth } from '../google-auth/google-auth';

export interface AuthState {
  isAuthenticated: boolean;
  basicProfile: BasicProfile;
  googleAuth: GoogleAuth;
}
