import userStore from '@/store/modules/user'

const user = {
  uid: 39,
  displayName: 'Kalacheva Natalia',
  email: 'test@gmail.com'
}

jest.mock('@/services/firebase/auth.services', () => {
  return {
    __esModule: true,
    firebaseGetUser: jest.fn(() => user)
  }
})


describe('test user getters', () => {
  const { user, userId, userName } = userStore.getters;
  let store;

  beforeEach(() => {
    store = {
      user:  {
        uid: 39,
        displayName: 'Kalacheva Natalia',
        email: 'test@gmail.com'
      }
    }
  })

  it('user', () => {
    const expectedUser = {
      uid: 39,
      displayName: 'Kalacheva Natalia',
      email: 'test@gmail.com'
    }

    expect(user(store)).toEqual(expectedUser)
  })

  it('user id', () => {
    expect(userId(store)).toBeDefined()
    expect(userId(store)).toBe(39)
  })

  it('user name', () => {
    expect(userId(store)).toBeDefined()
    expect(userName(store)).toBe('Kalacheva Natalia')
  })
})

describe('test user mutations', () => {
  const { USER } = userStore.mutations;

  it('USER', () => {
    const state = { user: {} };
    const user = {
      name: 'test',
      id: 123
    }
    const expectedState = {
      user: {
        name: 'test',
        id: 123
      }
    }

    USER(state, user);
    expect(state).toEqual(expectedState)
  })
})

describe('test user actions', () => {
  const { getUser, setUser } = userStore.actions;

  const context = {
    commit: jest.fn()
  }

  it('getUser action commits user mutation', async () => {
    await getUser.handler(context)
    expect(context.commit).toBeCalled()
    expect(context.commit).toBeCalledTimes(1)
    expect(context.commit).toHaveBeenCalledWith('USER', user)
  })
})