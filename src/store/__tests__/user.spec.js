import userStore from '@/store/modules/user'

const { getUser, setUser } = userStore.actions;

describe('test user getters', () => {
  const { user, userId, userName } = userStore.getters;

  const state = {
    user:  {
      uid: 39,
      displayName: 'Kalacheva Natalia',
      email: 'test@gmail.com'
    }
  }

  it('user', () => {
    const expectedUser = {
      uid: 39,
      displayName: 'Kalacheva Natalia',
      email: 'test@gmail.com'
    }

    expect(user(state)).toMatchObject(expectedUser)
  })

  it('user id', () => {
    expect(userId(state)).toBe(39)
  })

  it('user name', () => {
    expect(userName(state)).toBe('Kalacheva Natalia')
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
    expect(state).toMatchObject(expectedState)
  })
})
