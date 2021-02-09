import { mount } from '@vue/test-utils'
import LoginForm from '@/components/Auth/LoginForm.vue'

describe('LoginForm', () => {
  const wrapper = mount(LoginForm)

  it('renders the correct markup', () => {
    expect(wrapper.contains('.login-form')).toBe(true)
    expect(wrapper.contains('.login-submit')).toBe(true)
  })

})
