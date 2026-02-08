import { User } from './models/user'; 
import { AuthResponse } from './models/auth-response';

export interface AuthDataServiceInterface {
  login(user: User): Promise<AuthResponse>;
  register(user: User): Promise<AuthResponse>;
}
