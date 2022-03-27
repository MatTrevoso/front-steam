export interface Provider {
  userIsSigned: boolean;
  user: any;
  signOut: () => void;
  signIn: () => void;
}
