import { AuthProviderName } from '@app/auth/models/auth-provider-name';

/**
 * User that is safe to send to client. Doesn't have security sensitive data.
 */
// TODO Probably should be removed
export interface AuthenticatedUser {
  provider: AuthProviderName;
  id: string;
  email: string;
  name?: string;
  pictureUrl?: string;
}