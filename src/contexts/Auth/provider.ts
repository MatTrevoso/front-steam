export interface Provider {
  userIsSigned: boolean;
  user: any;
  handleSignOut: () => void;
  handleSignIn: () => void;
}
