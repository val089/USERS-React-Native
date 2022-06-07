export type UserType = {
  username: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user';
  enabled: boolean;
};

export const users = [
  {
    username: 'user01',
    firstName: 'Paweł',
    lastName: 'Pawłowski',
    role: 'user',
    enabled: true
  },
  {
    username: 'user01',
    firstName: 'Roman',
    lastName: 'Kalinowski',
    role: 'user',
    enabled: true
  },
  {
    username: 'user01',
    firstName: 'Kaczor',
    lastName: 'Donald',
    role: 'admin',
    enabled: true
  },
  {
    username: 'user01',
    firstName: 'Zenek',
    lastName: 'Zenowski',
    role: 'user',
    enabled: true
  }
];
