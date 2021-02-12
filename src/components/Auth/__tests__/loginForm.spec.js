import { mount, RouterLinkStub, createLocalVue, config } from '@vue/test-utils'
import LoginForm from '@/components/Auth/LoginForm.vue'
import Vuex from 'vuex'
import sinon from 'sinon'

config.showDeprecationWarnings = false

const localVue = createLocalVue()

localVue.use(Vuex)

describe('LoginForm', () => {
  let actions
  let store
  let methods

  beforeEach(() => {
    actions = {
      login: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
    methods = {
      submitForm: jest.fn(),
      clearValidate: jest.fn()
    }
  })

  it('renders the correct markup', () => {
    const wrapper = mount(LoginForm)
    const loginForm = wrapper.findComponent(LoginForm)
    const loginSubmit = wrapper.find('.login-submit')
    expect(loginForm.exists()).toBe(true)
    expect(loginSubmit.exists()).toBe(true)
  })

  it('contains reset link', () => {
    const wrapper = mount(LoginForm, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    const resetLink = wrapper.find(RouterLinkStub)
    expect(resetLink.props().to.name).toBe('ResetPassword')
  })

  it('call "submitForm" method, when submit form"', () => {
    const wrapper = mount(LoginForm)
    const submitBtn = wrapper.find('.login-submit')
    const submitFormStub = sinon.stub()

    wrapper.setMethods({ submitForm: submitFormStub })
    submitBtn.trigger('click')
    expect(submitFormStub.called).toBe(true)
  })

  it('call "clearValidate" method, when focus on input"', () => {
    const wrapper = mount(LoginForm)
    const clearValidateStub = sinon.stub()
    const input = wrapper.findAll('.login-input')

    wrapper.setMethods({ clearValidate: clearValidateStub })
    input.trigger('focus')

    expect(input.exists()).toBe(true)
    expect(clearValidateStub.called).toBe(true)
  })

  // it('call "login" action, when submit valid form"', () => {
  //   const wrapper = mount(LoginForm, { store, localVue })
  // })

})
