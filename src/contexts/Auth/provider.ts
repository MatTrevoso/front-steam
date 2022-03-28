export interface Provider {
  userIsSigned: boolean;
  user: string;
  signOut: () => void;
  signIn: (user: string) => void;
}
