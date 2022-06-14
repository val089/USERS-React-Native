import { UserType } from '../store/slices/usersSlice';

export const users: UserType[] = [
  {
    id: 'user-1',
    username: 'user01',
    firstName: 'John',
    lastName: 'Pawlowski',
    imgUri:
      'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    role: 'user',
    enabled: true
  },
  {
    id: 'user-2',
    username: 'user02',
    firstName: 'Alice',
    lastName: 'Kalinowska',
    imgUri:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'user',
    enabled: true
  },
  {
    id: 'user-3',
    username: 'user03',
    firstName: 'Kaczor',
    lastName: 'Donald',
    imgUri:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'admin',
    enabled: true
  },
  {
    id: 'user-4',
    username: 'user04',
    firstName: 'Patrycja',
    lastName: 'Zenowska',
    imgUri:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    role: 'admin',
    enabled: true
  },
  {
    id: 'user-5',
    username: 'user05',
    firstName: 'Zosia',
    lastName: 'Markowska',
    imgUri:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    role: 'admin',
    enabled: true
  },
  {
    id: 'user-6',
    username: 'user06',
    firstName: 'Markus',
    lastName: 'Wenberg',
    imgUri:
      'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    role: 'user',
    enabled: true
  },
  {
    id: 'user-7',
    username: 'user07',
    firstName: 'Paul',
    lastName: 'Duffy',
    imgUri:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    role: 'admin',
    enabled: true
  }
];
