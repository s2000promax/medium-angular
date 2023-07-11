export interface CurrentUserInterface {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
  bio: string | null;
  username: string;
  image: string | null;
  token: string;
}
