export type UserRoleType = 'admin' | 'user';

export type UserType = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRoleType;
  enabled: boolean;
};

export const users = [
  {
    id: 'user-1',
    username: 'user01',
    firstName: 'Paweł',
    lastName: 'Pawłowski',
    role: 'user',
    enabled: true
  },
  {
    id: 'user-2',
    username: 'user02',
    firstName: 'Roman',
    lastName: 'Kalinowski',
    role: 'user',
    enabled: true
  },
  {
    id: 'user-3',
    username: 'user03',
    firstName: 'Kaczor',
    lastName: 'Donald',
    role: 'admin',
    enabled: true
  },
  {
    id: 'user-4',
    username: 'user04',
    firstName: 'Zenek',
    lastName: 'Zenowski',
    role: 'user',
    enabled: true
  }
];
